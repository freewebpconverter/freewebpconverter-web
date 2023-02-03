import formidable from "formidable";

import { NextApiHandler } from "next";
import { convertImageToBase64 } from "@/utils";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler: NextApiHandler = async (req, res) => {
  const options: formidable.Options = {};
  options.multiples = true;
  const form = formidable(options);

  form.parse(req, (err, fields, files: any) => {
    if (err) {
      res.json({ success: false });
    }

    const type = files.files.length ? "multiple" : "single";

    convertAllImageToBase64(files.files, type)
      .then((response) => {
        res.json({
          success: true,
          body: response,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          error: err,
          body: null,
          fileResponse: files.files,
        });
      });
  });
};

const convertAllImageToBase64 = (files: any, type: string) => {
  return new Promise(async (resolve, reject) => {
    let images: any = [];

    if (type === "multiple") {
      await Promise.all(
        files.map(async (file: any) => {
          await convertImageToBase64(file.filepath)
            .then((response) => {
              images.push(response);
            })
            .catch((err) => {
              reject(`sharpErr Multiple: ${err}, file: ${file}`);
            });
        })
      );
    } else {
      convertImageToBase64(files.filepath)
        .then((response) => {
          images.push(response);
        })
        .catch((err) => {
          reject(`sharpErr Single: ${err}, file: ${files.filepath}`);
        });
    }

    resolve(images);
  });
};

export default handler;
