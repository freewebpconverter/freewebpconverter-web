import { CSSProperties } from "react";
import { secondary, background } from "@/theme/color";

interface IDragBackground {
  children: React.ReactNode;
}

const style: CSSProperties | undefined = {
  maxWidth: 640,
  width: "100%",
  height: 360,
  backgroundColor: background.main,
  border: `dashed 2px ${secondary.main}`,
  borderRadius: 10,
};

const DragBackground = ({ children }: IDragBackground) => {
  return <section style={style}>{children}</section>;
};

export default DragBackground;
