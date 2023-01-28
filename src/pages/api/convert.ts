import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler: NextApiHandler = async (req, res) => {
  const sharp = require("sharp");
  const webp = require("webp-converter");

  const options: formidable.Options = {};
  options.maxFileSize = 4000 * 1024 * 1024;

  const form = formidable(options);
  form.parse(req, (err, fields, files: any) => {
    if (err) console.log("err: ", err);

    let url: string = files.image.filepath;

    sharp(url)
      .webp()
      .toBuffer()
      .then((sharpRes: any) => {
        let buf = Buffer.from(sharpRes);
        let dataBase64 = Buffer.from(buf).toString("base64");
        
        res.json({ message: "success", file: dataBase64 });
      })
      .catch((sharpErr: any) => {
        res.json({ message: "error" });
      });
  });
};

export default handler;