import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import JSZip from "jszip";

import { saveAs } from "file-saver";
import { warningHandler, errorHandler, successHandler } from "@/utils/error";

import { CSSProperties } from "react";
import {
  Icon,
  IconButton,
  DragBackground,
  Paragraph,
  Button,
} from "@components/atoms";
import { ListTable } from "@components/organisms";
import {
  faInfo,
  faCloudArrowUp,
  faSpinner,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Space, Tooltip, Row, Col, Alert } from "antd";
import { primary } from "@/theme/color";
import { fileFormatControl, getCleanBase64, formatBytes } from "@/utils";

const iconStyle: CSSProperties | undefined = {
  position: "absolute",
  right: 30,
  top: 30,
};

const DragSection = () => {
  const [isDrag, setIsDrag] = useState(false);
  const [fileList, setFileList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const dropzone = useRef<HTMLElement | null>(null);
  const fileInput = useRef<HTMLInputElement | null>(null);

  const dropHandler = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    setIsDrag(false);

    if (!e.dataTransfer.files) return;

    setConvert(e.dataTransfer.files);
  };

  const dragHandler = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    setIsDrag(true);
  };

  const dragLeaveHandler = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    setIsDrag(false);
  };

  const clickHandler = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const onInputChange = (e: any) => {
    if (!e.target.files) return;

    setConvert(e.target.files);
  };

  const setConvert = async (files: FileList) => {
    const hasIgnoreFiles = fileFormatControl(files);

    if (hasIgnoreFiles) {
      errorHandler("Unsupported format.");

      return;
    }

    setIsLoading(true);

    const filesData: any = [];

    for (let i = 0; i < files.length; i++) {
      const fileItem: any = files[i];
      const base64 = await getCleanBase64(fileItem);

      console.log("fileItem: ", fileItem);

      filesData.push({
        file: base64,
        name: fileItem.name,
        type: fileItem.type,
        size: fileItem.size,
      });
    }

    console.log("filesData: ", filesData);

    axios
      .post(
        "https://octopus-app-o8779.ondigitalocean.app/sample/convert",
        {
          files: filesData,
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((res: any) => {
        setIsLoading(false);

        if (res.status === 200) {
          const responseFileList: any = res.data.files.map(
            (item: any, index: any) => ({
              ...item,
              key: Date.now() + item.name,
              file: "data:image/webp;base64," + item.file,
            })
          );

          addItem(responseFileList);
          successHandler("Process has done successfully.");
        } else {
          errorHandler(res.data.statusText);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        errorHandler(err);
      });
  };

  const addItem = (item: any) => {
    setFileList((fileList: any) => [...item, ...fileList]);
  };

  const onDownloadAllClick = async () => {
    var zip = new JSZip();

    var img = zip.folder("images");

    fileList.map((fileItem: any) => {
      const fileName = `${fileItem.name.replace(/\.[^/.]+$/, "")}.webp`;
      const fileData = fileItem.file.replace("data:image/webp;base64,", "");

      img && img.file(fileName, fileData, { base64: true });
    });

    const content = await zip.generateAsync({ type: "blob" });

    saveAs(content, "images.zip");
  };

  useEffect(() => {
    if (dropzone.current) {
      dropzone.current.addEventListener("drop", dropHandler);
      dropzone.current.addEventListener("dragover", dragHandler);
      dropzone.current.addEventListener("dragleave", dragLeaveHandler);
    }

    return () => {
      if (dropzone.current) {
        dropzone.current.removeEventListener("drop", dropHandler);
        dropzone.current.removeEventListener("dragover", dragHandler);
        dropzone.current.removeEventListener("dragleave", dragLeaveHandler);
      }
    };
  }, [dropzone]);

  return (
    <>
      <DragBackground ref={dropzone} onClick={clickHandler}>
        <Tooltip title="JPG, PNG and GIF">
          <IconButton style={iconStyle}>
            <Icon icon={faInfo} />
          </IconButton>
        </Tooltip>
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          <Space direction="vertical" align="center">
            <Icon
              size="4x"
              icon={isLoading ? faSpinner : faCloudArrowUp}
              className={`${isLoading && "fa-spin"}`}
              color={isDrag ? primary.main : primary[500]}
            />
            <Paragraph
              size={17}
              color={isDrag ? primary.main : primary[500]}
              style={{ margin: 0 }}
            >
              {isLoading
                ? "Your files are processing..."
                : "Drag your files here"}
            </Paragraph>
          </Space>
        </Row>
        <input
          onChange={onInputChange}
          type="file"
          multiple
          ref={fileInput}
          accept="image/png, image/jpeg, image/gif"
          style={{ display: "none" }}
        />
      </DragBackground>
      {fileList.length > 0 && (
        <>
          <ListTable fileList={fileList} />
          <Row justify="center" style={{ width: "100%", marginTop: 50 }}>
            <Col>
              <Button onClick={onDownloadAllClick} type="primary">
                <Space>
                  <Icon icon={faDownload} />
                  Download All
                </Space>
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default DragSection;
