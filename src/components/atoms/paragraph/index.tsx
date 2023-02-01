import React from "react";
import { Typography as AntdTypography } from "antd";
import { ParagraphProps } from "antd/es/typography/Paragraph";
import { ParagraphTheme } from "@/theme";

const { Paragraph } = AntdTypography;

interface IParagraphProps extends ParagraphProps {
  size: number;
  color: string;
}

const TitleComponent = ({
  children,
  size,
  color,
  ...rest
}: IParagraphProps) => {
  return (
    <ParagraphTheme size={size} color={color}>
      <Paragraph {...rest}>
        <p style={{ margin: 0 }}>{children}</p>
      </Paragraph>
    </ParagraphTheme>
  );
};

export default TitleComponent;
