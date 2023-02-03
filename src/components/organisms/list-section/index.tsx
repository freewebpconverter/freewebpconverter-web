import { List } from "antd";
import { Paragraph } from "@components/atoms";
import { text } from "@/theme/color";
import { CSSProperties } from "react";

const data = [
  {
    name: "Test",
  },
  {
    name: "Test 2",
  },
  {
    name: "Test 3",
  },
];

const listStyle: CSSProperties = {
  width: "100%",
  margin: "100px 30px 30px 30px",
};

const ListSection = () => {
  return (
    <List
      style={listStyle}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Paragraph size={17} color={text.main} style={{ margin: 0 }}>
            {item.name}
          </Paragraph>
        </List.Item>
      )}
    />
  );
};

export default ListSection;
