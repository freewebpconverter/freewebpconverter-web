import { CSSProperties } from "react";
import { Space, Row, Col } from "antd";
import { Title, Paragraph } from "@components/atoms";
import { primary } from "@/theme/color";

type PictureFrameProps = {
  img: string;
  title: string;
  detail: string;
};

const imageStyle = (img: string) => ({
  position: "relative",
  backgroundImage: `url(${img})`,
  width: "100%",
  height: 460,
  borderRadius: 20,
  backgroundPosition: "center",
  backgroundSize: "cover",
  margin: "50px 0px",
});

const frameStyle: CSSProperties = {
  position: "absolute",
  top: 25,
  left: 25,
  width: "calc(100% - 50px)",
  height: "calc(100% - 50px)",
  borderRadius: 20,
  border: "solid 5px #fff",
  boxSizing: "border-box",
};

const PictureFrame = (props: PictureFrameProps) => {
  const { img, title, detail } = props;

  return (
    <>
      <section style={imageStyle(img) as CSSProperties}>
        <div style={frameStyle}></div>
      </section>
      <Row justify="center" style={{ marginBottom: 50 }}>
        <Col>
          <Title
            level={2}
            style={{
              color: primary.main,
              marginTop: 20,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            {title}
          </Title>
          <Paragraph
            size={21}
            color={primary.main}
            style={{ margin: 0, textAlign: "center" }}
          >
            {detail}
          </Paragraph>
        </Col>
      </Row>
    </>
  );
};

export default PictureFrame;
