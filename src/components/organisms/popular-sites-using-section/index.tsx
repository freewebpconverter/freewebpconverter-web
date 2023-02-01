import { Row, Col } from "antd";
import { Container, Title, Icon } from "@components/atoms";
import { background, primary, secondary } from "@/theme/color";
import { CSSProperties } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGoogle,
  faYahoo,
  faApple,
  faWhatsapp,
  faWordpress,
  faGithub,
  faDropbox,
} from "@fortawesome/free-brands-svg-icons";

const rowStyle: CSSProperties = {
  backgroundColor: background[500],
  padding: "100px 0px",
  margin: "150px 0px",
};

interface IIconCollection {
  url: string;
  icon: IconProp;
}

const iconCollection: IIconCollection[] = [
  {
    url: "https://www.google.com/",
    icon: faGoogle,
  },
  {
    url: "https://www.google.com/",
    icon: faYahoo,
  },
  {
    url: "https://www.google.com/",
    icon: faApple,
  },
  {
    url: "https://www.google.com/",
    icon: faWhatsapp,
  },
  {
    url: "https://www.google.com/",
    icon: faWordpress,
  },
  {
    url: "https://www.google.com/",
    icon: faGithub,
  },
  {
    url: "https://www.google.com/",
    icon: faDropbox,
  },
];

const PopularSitesUsingSection = () => {
  return (
    <Row style={rowStyle}>
      <Col span={24}>
        <Container>
          <Row justify="center">
            <Col>
              <Title
                level={4}
                style={{ color: secondary.main, letterSpacing: "1.3px" }}
              >
                POPULAR SITES USING WEBP
              </Title>
            </Col>
          </Row>
          <Row align={"middle"} gutter={[50, 150]} style={{ marginTop: 100 }}>
            {iconCollection.map((item, index) => (
              <Col span={6} key={index}>
                <Row justify="center">
                  <Col>
                    <Icon
                      opacity={0.8}
                      color={primary.main}
                      icon={item.icon}
                      size="4x"
                    />
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default PopularSitesUsingSection;
