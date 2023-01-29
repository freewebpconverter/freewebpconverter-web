import React from "react";
import { Button as AntdButton, ButtonProps } from "antd";
import { ButtonTheme } from "@/theme";

const Button = ({ children, type, ...rest }: ButtonProps) => {
  return (
    <ButtonTheme type={type}>
      <AntdButton type={type} {...rest} style={{ boxShadow: "none" }}>
        {children}
      </AntdButton>
    </ButtonTheme>
  );
};

export default Button;
