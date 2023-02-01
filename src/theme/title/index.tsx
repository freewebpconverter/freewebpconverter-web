import React from "react";
import { ConfigProvider } from "antd";

interface ITitleTheme {
  children: React.ReactNode;
}

const TitleTheme = ({ children }: ITitleTheme) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSizeHeading1: 43,
          fontSizeHeading2: 53,
          fontSizeHeading3: 21,
          fontSizeHeading4: 13,
          fontWeightStrong: 700,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default TitleTheme;
