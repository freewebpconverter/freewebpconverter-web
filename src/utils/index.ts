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

const fileFormatControl = (files: any) => {
  const re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
  const hasIgnoreFiles =
    Array.from(files).filter((item: any) => !re.exec(item.name)).length > 0;

  return hasIgnoreFiles;
};

const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const getCleanBase64 = async (file: any) => {
  const base64: any = await convertBase64(file);
  const cleanBase64 = base64.replace(/^data:image\/[a-z]+;base64,/, "");

  return cleanBase64;
};

export { fileDetail, fileFormatControl, getCleanBase64, formatBytes };
