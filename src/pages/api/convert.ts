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

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.json({ success: false });
    }

    convertAllImageToBase64(files.files)
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

const resizeImages = async (files: any) => {
  const sharp = require("sharp");
  let images: any = [];

  await Promise.all(
    files.map(async (file: any) => {
      await sharp(file.filepath)
        .webp()
        .toBuffer()
        .then((sharpRes: any) => {
          let buf = Buffer.from(sharpRes);
          let dataBase64 = Buffer.from(buf).toString("base64");

          images.push(dataBase64);
        })
        .catch((sharpErr: any) => {
          console.log("sharpErr: ", sharpErr);
        });
    })
  );
};

const convertAllImageToBase64 = (files: any) => {
  return new Promise(async (resolve, reject) => {
    const sharp = require("sharp");
    let images: any = [];

    await Promise.all(
      files.map(async (file: any) => {
        await sharp(file.filepath)
          .webp()
          .toBuffer()
          .then((sharpRes: any) => {
            let buf = Buffer.from(sharpRes);
            let dataBase64 = Buffer.from(buf).toString("base64");

            images.push(dataBase64);
          })
          .catch((sharpErr: any) => {
            reject(`sharpErr: ${sharpErr}`);
          });
      })
    );

    resolve(images);
  });
};

export default handler;
