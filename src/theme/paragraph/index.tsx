import React from "react";
import { ConfigProvider } from "antd";
import { text } from "@/theme/color";

interface IParagraphTheme {
  size: number;
  color: string;
  children: React.ReactNode;
}

const ParagraphTheme = ({ children, size, color }: IParagraphTheme) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: color ? color : text.main,
          fontSize: size,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ParagraphTheme;
