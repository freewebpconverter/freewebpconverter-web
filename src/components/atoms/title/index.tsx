import React from "react";
import { Typography as AntdTypography } from "antd";
import { TitleProps } from "antd/es/typography/Title";
import { TitleTheme } from "@/theme";

const { Title } = AntdTypography;

const TitleComponent = ({ children, ...rest }: TitleProps) => {
  return (
    <TitleTheme>
      <Title {...rest}>{children}</Title>
    </TitleTheme>
  );
};

export default TitleComponent;
