import React from "react";
import { ConfigProvider } from "antd";

interface IIconButtonTheme {
  children: React.ReactNode;
}

const IconButtonTheme = ({ children }: IIconButtonTheme) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#36bf77",
          colorPrimaryBg: "#36bf77",
          colorPrimaryBgHover: "#259e95",
          colorPrimaryText: "#fff",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default IconButtonTheme;
