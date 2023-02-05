interface IUploadedFile {
  file: string;
  name: string;
  oldSize: string;
  newSize: string;
  percent: string;
  status: string;
}

export type { IUploadedFile };
