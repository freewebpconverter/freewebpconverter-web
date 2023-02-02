import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

import { CSSProperties } from "react";
import { Icon, IconButton, DragBackground, Paragraph } from "@components/atoms";
import { faInfo, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Space, Tooltip, Row } from "antd";
import { primary } from "@/theme/color";

const iconStyle: CSSProperties | undefined = {
  position: "absolute",
  right: 30,
  top: 30,
};

const DragSection = () => {
  const [isDrag, setIsDrag] = useState(false);

  const dropzone = useRef<HTMLElement | null>(null);
  const fileInput = useRef<HTMLInputElement | null>(null);

  const dropHandler = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    setIsDrag(false);

    const files = e.dataTransfer.files;

    if (files.length > 0) {
      setConvert(files);
    }
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

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.files: ", e.target.files);
    if (!e.target.files) return;

    setConvert(e.target.files);
  };

  const setConvert = (files: FileList) => {
    const formData: any = new FormData();

    for (let i = 0; i < files.length; i++) {
      const fileItem = files[i];

      formData.append("files", fileItem, fileItem.name);
    }

    axios
      .post("http://localhost:3000/api/convert", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        res.data.body.map((item: any, index: any) => {
          var a = document.createElement("a");
          a.href = "data:image/webp;base64," + item;
          a.download = `convertImage${index}.webp`;
          a.click();
        });

        /*
      var a = document.createElement("a");
      a.href = "data:image/webp;base64," + res.data.file;
      a.download = "convertedWebp.webp";
      a.click();
      */
      });
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
    <DragBackground ref={dropzone} onClick={clickHandler}>
      <Tooltip title="Max. 5 MB Image(JPG, JPEG, GIF and PNG) File">
        <IconButton style={iconStyle}>
          <Icon icon={faInfo} />
        </IconButton>
      </Tooltip>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Space direction="vertical" align="center">
          <Icon
            size="4x"
            icon={faCloudArrowUp}
            color={isDrag ? primary.main : primary[500]}
          />
          <Paragraph
            size={17}
            color={isDrag ? primary.main : primary[500]}
            style={{ margin: 0 }}
          >
            Drag your files here
          </Paragraph>
        </Space>
      </Row>
      <input
        onChange={onInputChange}
        type="file"
        multiple
        ref={fileInput}
        style={{ display: "none" }}
      />
    </DragBackground>
  );
};

export default DragSection;
