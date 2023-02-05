import { List, Space, Row, Col } from "antd";
import { Paragraph, Icon, Button } from "@components/atoms";
import { text, status } from "@/theme/color";
import { CSSProperties } from "react";
import {
  faSpinner,
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import type { IUploadedFile } from "@/components/organisms/drag-section/data";

const listStyle: CSSProperties = {
  width: "100%",
  margin: "100px 30px 30px 30px",
};

const statusIcon: any = {
  loading: {
    icon: faSpinner,
    color: status.loading,
  },
  success: {
    icon: faCheckCircle,
    color: status.success,
  },
  error: {
    icon: faXmarkCircle,
    color: status.error,
  },
};

interface ListSectionProps {
  fileList: IUploadedFile[];
}

const ListSection = (props: ListSectionProps) => {
  const { fileList } = props;

  return (
    <Row style={listStyle}>
      <Col span={24}>
        <List
          itemLayout="horizontal"
          dataSource={fileList}
          renderItem={(item) => (
            <List.Item style={{ padding: "12px 0px" }}>
              <Row justify="space-between" style={{ width: "100%" }}>
                <Space>
                  {item.status && (
                    <Icon
                      icon={statusIcon[item.status].icon}
                      className={`${item.status === "loading" && "fa-spin"}`}
                      color={statusIcon[item.status].color}
                    />
                  )}
                  <Paragraph size={17} color={text.main} style={{ margin: 0 }}>
                    {item.name}
                  </Paragraph>
                </Space>
                <Paragraph
                  size={15}
                  color={text.main}
                  style={{ margin: 0, minWidth: 150 }}
                >
                  {item.oldSize} {">"} {item.newSize}
                </Paragraph>
                <Button
                  type="link"
                  download={`${item.name.replace(/\.[^/.]+$/, "")}.webp`}
                  href={item.file}
                >
                  Download
                </Button>
              </Row>
            </List.Item>
          )}
        />
      </Col>
      <Col span={24} style={{ marginTop: 30 }}>
        <Row justify="end">
          <Button type="link" size="large">
            Download All
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default ListSection;
