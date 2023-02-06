import React from "react";
import { Button as AntdButton, ButtonProps } from "antd";
import { ButtonTheme } from "@/theme";

interface IButtonProps extends ButtonProps {
  customBg?: string;
}

const Button = ({ children, type, customBg, ...rest }: IButtonProps) => {
  return (
    <ButtonTheme customBg={customBg} type={type}>
      <AntdButton type={type} {...rest} style={{ boxShadow: "none" }}>
        {children}
      </AntdButton>
    </ButtonTheme>
  );
};

export default Button;
