import React from "react";
import { ConfigProvider } from "antd";

interface IButtonTheme {
  children: React.ReactNode;
  type: string | undefined;
  customBg?: string;
}

const ButtonTheme = ({ children, type, customBg }: IButtonTheme) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: customBg ? customBg : "#36bf77",
          fontWeightStrong: 500,
          fontSize: 15,
          borderRadius: 6,

          colorPrimaryText: "#fff",

          colorLink: "#000",
          colorLinkHover: "#36BF77",

          paddingContentVertical: type === "link" ? 0 : 50,
          paddingContentHorizontal: type === "link" ? 0 : 40,
          controlHeight: type === "link" ? undefined : 55,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ButtonTheme;
