import React from "react";

import { Typography } from "antd";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Icon } from "@components/atoms";

const { Title } = Typography;

const ComponentsPage = () => {
  return (
    <Container>
      <Title level={3}>Icon</Title>
      <Icon icon={faRocket} />
      <Title level={3}>Form Elements</Title>
      <Button type="link">About</Button>
      <Button type="primary">Try the app, it’s free</Button>
    </Container>
  );
};

export default ComponentsPage;
