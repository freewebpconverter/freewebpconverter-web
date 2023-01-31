import React from "react";
import { Button as AntdButton, ButtonProps } from "antd";
import { IconButtonTheme } from "@/theme";

const IconButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <IconButtonTheme>
      <AntdButton
        shape="circle"
        type="primary"
        {...rest}
        style={{ boxShadow: "none" }}
      >
        {children}
      </AntdButton>
    </IconButtonTheme>
  );
};

export default IconButton;
