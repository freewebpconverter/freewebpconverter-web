import React from "react";
import { ConfigProvider, Button as AntdButton, ButtonProps } from "antd";

const Button = ({ children, ...rest }: ButtonProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#00b96b",
      },
    }}
  >
    <AntdButton {...rest}>{children}</AntdButton>
  </ConfigProvider>
);

export default Button;
