import { Container, Icon } from "@/components/atoms";
import { PictureFrame, SectionTitle } from "@/components/molecules";
import { Col, Row } from "antd";

const PerformanceSection = () => {
  return (
    <Container>
      <Row justify="center">
        <Col>
          <SectionTitle
            mainTitle="PERFORMANCE"
            title="Light Weight"
            detail="It takes less space than other image formats."
          />
        </Col>
      </Row>
      <Row justify="center" align="middle" gutter={100}>
        <Col>
          <PictureFrame
            title="PNG"
            detail="70 KB"
            img="/assets/img/picture.png"
          />
        </Col>
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="50.508"
            viewBox="0 0 150 50.508"
          >
            <path
              id="Path_11697"
              data-name="Path 11697"
              d="M189.1,41.469c-5.077,1.091-10.153,2.184-15.743,3.385a6.709,6.709,0,0,1,4.858-5.959A211.84,211.84,0,0,1,200,32.924c4.226-.854,6.445,1.976,5.17,5.913-2.128,6.568-4.608,13.033-6.948,19.539-.137.38-.246.893-.545,1.073-.957.576-2,1.026-3.007,1.524-.425-.835-1.3-1.727-1.2-2.5.352-2.6,1.047-5.149,1.617-7.717a8.569,8.569,0,0,0,.061-4.681c-1.616,1.406-3.3,2.75-4.837,4.229-31.271,30.1-37.982,75.2-16.659,112.64,2.725,4.787,6.068,9.249,9.1,13.879,1.055,1.614,2.021,3.28,3.028,4.922l-.937,1.024c-1.2-.423-2.735-.535-3.535-1.328a82.779,82.779,0,0,1-7.889-8.681c-23.7-31.386-24.628-74.977-2.033-108.7,4.309-6.431,9.852-12.1,14.869-18.092,1.031-1.233,2.251-2.32,3.385-3.475Q189.371,41.981,189.1,41.469Z"
              transform="translate(182.771 -155.024) rotate(90)"
            />
          </svg>
        </Col>
        <Col>
          <PictureFrame
            title="WEBP"
            detail="45 KB"
            img="/assets/img/picture.webp"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PerformanceSection;
