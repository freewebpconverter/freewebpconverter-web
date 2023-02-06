import { CSSProperties } from "react";
import { Container, Paragraph, Button } from "@components/atoms";
import { background, secondary, text } from "@/theme/color";
import { Row, Col, Space } from "antd";

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
            <Space align="center" size={2}>
              <Paragraph size={11} color={text.main}>
                Site Design & Development by
              </Paragraph>
              <Button
                type="link"
                target="_blank"
                href="https://www.yasinkalkan.com/"
              >
                <Paragraph size={11} color="inherit">
                  Yasin KALKAN
                </Paragraph>
              </Button>
            </Space>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
