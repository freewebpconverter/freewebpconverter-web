import React from "react";
import { CSSProperties } from "react";
import { secondary, background } from "@/theme/color";

interface IDragBackground {
  onClick: () => void;
  ref?: any;
  children: React.ReactNode;
}

const style: CSSProperties | undefined = {
  position: "relative",
  maxWidth: 640,
  width: "100%",
  height: 360,
  backgroundColor: background.main,
  border: `dashed 2px ${secondary.main}`,
  borderRadius: 10,
};

const DragBackground = React.forwardRef<HTMLElement, IDragBackground>(
  (props, ref) => {
    const { children, onClick, ...rest } = props;

    return (
      <section
        ref={ref}
        {...rest}
        style={style}
        draggable={true}
        onClick={onClick}
      >
        {children}
      </section>
    );
  }
);

export default DragBackground;