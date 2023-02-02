import { Space } from "antd";
import { Title, Paragraph } from "@components/atoms";
import { text, secondary, black } from "@/theme/color";

type SectionTitleProps = {
  mainTitle: string;
  title: string;
  detail: string;
};

const SectionTitle = (props: SectionTitleProps) => {
  const { mainTitle, title, detail } = props;

  return (
    <Space
      direction="vertical"
      size={0}
      align="center"
      style={{ marginBottom: 150 }}
    >
      <Title
        level={4}
        color={secondary.main}
        style={{
          color: secondary.main,
          letterSpacing: "1.3px",
          marginBottom: 20,
        }}
      >
        {mainTitle}
      </Title>
      <Title level={1} color={black.main} style={{ marginBottom: 10, textAlign: "center" }}>
        {title}
      </Title>
      <Paragraph size={21} color={text.main} style={{ marginBottom: 0, textAlign: "center" }}>
        {detail}
      </Paragraph>
    </Space>
  );
};

export default SectionTitle;
