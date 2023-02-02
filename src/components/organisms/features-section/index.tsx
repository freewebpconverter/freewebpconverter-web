import { Row, Col } from "antd";
import { FeatureItem } from "@components/molecules";
import {
  faRocket,
  faImage,
  faGlobe,
  faCheckCircle,
  faUser,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesSection = () => {
  return (
    <Row gutter={[50, 50]} style={{ marginTop: 150 }}>
      <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
        <FeatureItem
          icon={faRocket}
          title="Fast"
          detail="Convert your image files to WEBP format in seconds."
        />
      </Col>
      <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
        <FeatureItem
          icon={faImage}
          title="File Support"
          detail="The application supports JPEG, JPG, GIF, and PNG formats."
        />
      </Col>
      <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
        <FeatureItem
          icon={faGlobe}
          title="Browser Support"
          detail="All modern web browsers support the WebP format."
        />
      </Col>
      <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
        <FeatureItem
          icon={faCheckCircle}
          title="Free"
          detail="We do not charge for converting image files."
        />
      </Col>
      <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
        <FeatureItem
          icon={faUser}
          title="No Membership"
          detail="You do not need to be a member to convert image files."
        />
      </Col>
      <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
        <FeatureItem
          icon={faFeather}
          title="Light Weight"
          detail="It takes less space than other image formats."
        />
      </Col>
    </Row>
  );
};

export default FeaturesSection;
