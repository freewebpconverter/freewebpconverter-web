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
  return (
    <DragBackground>
      <Tooltip title="Max. 5 MB Image(JPG, JPEG, GIF and PNG) File">
        <IconButton style={iconStyle}>
          <Icon icon={faInfo} />
        </IconButton>
      </Tooltip>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Space direction="vertical" align="center">
          <Icon size="4x" icon={faCloudArrowUp} color={primary[500]} />
          <Paragraph size={17} color={primary[500]}>Drag your files here</Paragraph>
        </Space>
      </Row>
    </DragBackground>
  );
};

export default DragSection;
