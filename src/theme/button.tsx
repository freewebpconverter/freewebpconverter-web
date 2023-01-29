import React from "react";
import { ConfigProvider } from "antd";
import { Poppins } from "@next/font/google";

const fontPoppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

interface IButtonTheme {
  children: React.ReactNode;
  type: string | undefined;
}

const ButtonTheme = ({ children, type }: IButtonTheme) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#36bf77",
          fontFamily: fontPoppins.style.fontFamily,
          fontWeightStrong: 500,
          fontSize: 15,
          borderRadius: 6,

          colorPrimaryBg: "#36bf77",
          colorPrimaryBgHover: "#259e95",
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
