import { Row, Col, Space } from "antd";
import { Container, Button, Icon } from "@components/atoms";
import { background } from "@/theme/color";
import { CSSProperties } from "react";
import { SectionTitle } from "@/components/molecules";
import { pink, gray } from "@/theme/color";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const rowStyle: CSSProperties = {
  backgroundColor: background[500],
  padding: "100px 0px",
  marginTop: 150,
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
              <Space size={30}>
                <Button customBg={gray.main} type="primary">
                  <Space size={20} align="center">
                    <Icon size="1x" icon={faGithub} />
                    Github
                  </Space>
                </Button>
                <Button customBg={pink.main} type="primary">
                  <Space size={20} align="center">
                    <Icon size="1x" icon={faHeart} />
                    Sponsor
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
