const formatBytes = (bytes: number, decimals: number = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const fileDetail = (response: any, file: any) => {
  let buf = Buffer.from(response);
  let dataBase64 = Buffer.from(buf).toString("base64");

  return {
    baseFile: file,
    file: dataBase64,
    name: file.originalFilename,
    type: file.mimetype,
    oldSize: formatBytes(file.size),
    newSize: formatBytes(buf.byteLength),
    percent: calcPercent(buf.byteLength, file.size),
  };
};

const calcPercent = (newSize: number, oldSize: number) =>
  `-${Math.floor(((oldSize - newSize) / oldSize) * 100)}%`;

export { fileDetail };
