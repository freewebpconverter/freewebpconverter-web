import React from "react";
import { ConfigProvider, Button as AntdButton, ButtonProps } from "antd";

import { Poppins } from "@next/font/google";

const fontPoppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          fontFamily: fontPoppins.style.fontFamily,
          fontWeightStrong: 500,
          fontSize: 15,
          borderRadius: 6,

          colorPrimaryBg: "#36bf77",
          colorPrimaryBgHover: "#259e95",
          colorPrimaryText: "#fff",
          paddingContentVertical: 50,
          paddingContentHorizontal: 40,
          controlHeight: 55,
        },
      }}
    >
      <AntdButton {...rest}>{children}</AntdButton>
    </ConfigProvider>
  );
};

export default Button;
