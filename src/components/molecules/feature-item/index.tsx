import { Space } from "antd";
import { Title, Paragraph, Icon } from "@components/atoms";
import { text, black, primary } from "@/theme/color";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type FeatureItemProps = {
  icon: IconProp;
  title: string;
  detail: string;
};

const FeatureItem = (props: FeatureItemProps) => {
  const { icon, title, detail } = props;

  return (
    <Space align="start" size={50}>
      <Icon color={primary.main} size="3x" icon={icon} />
      <Space direction="vertical">
        <Title level={3} color={black.main}>
          {title}
        </Title>
        <Paragraph size={17} color={text.main}>
          {detail}
        </Paragraph>
      </Space>
    </Space>
  );
};

export default FeatureItem;
