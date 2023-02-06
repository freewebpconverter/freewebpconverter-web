import formidable from "formidable";

import { NextApiHandler } from "next";
import { fileDetail } from "@/utils";

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
      res.json({ success: false, error: err });
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
        });
      });
  });
};

const convertAllImageToBase64 = (files: any, type: string) => {
  return new Promise(async (resolve, reject) => {
    const sharp = require("sharp");
    let images: any = [];

    if (type === "multiple") {
      await Promise.all(
        files.map(async (file: any) => {
          await sharp(file.filepath)
            .webp()
            .toBuffer()
            .then((sharpRes: any) => {
              images.push(fileDetail(sharpRes, file));
            })
            .catch((err: any) => reject(err));
        })
      );
    } else {
      await sharp(files.filepath)
        .webp()
        .toBuffer()
        .then((sharpRes: any) => {
          images.push(fileDetail(sharpRes, files));
        })
        .catch((err: any) => reject(err));
    }

    resolve(images);
  });
};

export default handler;
