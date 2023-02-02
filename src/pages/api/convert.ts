import { NextApiHandler } from "next";
import formidable from "formidable";

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
              let buf = Buffer.from(sharpRes);
              let dataBase64 = Buffer.from(buf).toString("base64");

              images.push({ base64: dataBase64, name: file.originalFilename });
            })
            .catch((sharpErr: any) => {
              reject(`sharpErr: ${sharpErr}`);
            });
        })
      );
    } else {
      await sharp(files.filepath)
        .webp()
        .toBuffer()
        .then((sharpRes: any) => {
          let buf = Buffer.from(sharpRes);
          let dataBase64 = Buffer.from(buf).toString("base64");

          images.push({ base64: dataBase64, name: files.name });
        })
        .catch((sharpErr: any) => {
          reject(`sharpErr: ${sharpErr}`);
        });
    }

    resolve(images);
  });
};

export default handler;
