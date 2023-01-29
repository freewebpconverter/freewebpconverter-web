import React from "react";

import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Icon, Title } from "@components/atoms";
import { Navigation } from "@components/molecules";
import { Divider } from "antd";

const ComponentsPage = () => {
  return (
    <Container>
      <Title level={3}>Title</Title>
      <Title level={1}>H1 Title</Title>
      <Title level={2}>H2 Title</Title>
      <Title level={3}>H3 Title</Title>
      <Title level={4}>H4 Title</Title>
      <Divider />
      <Title level={3}>Icon</Title>
      <Icon icon={faRocket} />
      <Divider />
      <Title level={3}>Form Elements</Title>
      <Button type="link">About</Button>
      <Button type="primary">Try the app, it’s free</Button>
      <Divider />
      <Title level={3}>Navigation</Title>
      <Navigation />
    </Container>
  );
};

export default ComponentsPage;
