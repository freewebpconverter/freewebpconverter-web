import { Row, Col, Space } from "antd";
import { Container, Button, Icon, Paragraph } from "@components/atoms";
import { background, black } from "@/theme/color";
import { CSSProperties } from "react";
import { SectionTitle } from "@/components/molecules";
import { yellow, gray } from "@/theme/color";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const rowStyle: CSSProperties = {
  backgroundColor: background[500],
  padding: "100px 0px",
  marginTop: 50,
};

const SponsorSection = () => {
  return (
    <Row style={rowStyle} justify="center">
      <Col span={24}>
        <Container>
          <Row justify="center">
            <Col>
              <SectionTitle
                mainTitle="SPONSOR"
                title="You can support us"
                detail="You can sponsor the project on GitHub or support the development process."
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Space
                size={30}
                wrap={true}
                align="center"
                style={{ justifyContent: "center" }}
              >
                <Button
                  customBg={gray.main}
                  type="primary"
                  href="https://github.com/freewebpconverter"
                  target="_blank"
                >
                  <Space size={20} align="center">
                    <Icon size="1x" icon={faGithub} />
                    Github
                  </Space>
                </Button>
                <Button
                  customBg={yellow.main}
                  type="primary"
                  href="https://www.buymeacoffee.com/yasgo"
                  target="_blank"
                >
                  <Space size={20} align="center">
                    <Icon color={black.main} size="1x" icon={faCoffee} />
                    <Paragraph
                      size={15}
                      color={black.main}
                      style={{ margin: 0 }}
                    >
                      Buy Me A Coffee
                    </Paragraph>
                  </Space>
                </Button>
              </Space>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default SponsorSection;
