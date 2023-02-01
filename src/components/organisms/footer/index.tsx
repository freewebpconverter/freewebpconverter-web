import { CSSProperties } from "react";
import { Container, Paragraph, Button } from "@components/atoms";
import { background, secondary, text } from "@/theme/color";
import { Row, Col } from "antd";

const footerStyle: CSSProperties = {
  backgroundColor: background.main,
  padding: "100px 0px",
  borderTop: `1px solid ${secondary[500]}`,
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row justify="space-between">
          <Col>
            <Paragraph size={11} color={text.main}>
              COPYRIGHT © 2023 FREE WEBP CONVERTER
            </Paragraph>
          </Col>
          <Col>
            <Paragraph size={11} color={text.main}>
              Site Design & Development by Yasin KALKAN
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
