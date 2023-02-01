import React, { useRef, useEffect, useState } from "react";
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

    const files = Array.from(e.dataTransfer.files);
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
    if (!e.target.files) return;
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
        ref={fileInput}
        style={{ display: "none" }}
      />
    </DragBackground>
  );
};

export default DragSection;
