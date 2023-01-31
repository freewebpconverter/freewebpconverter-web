import { Row, Space } from "antd";
import { INavigationProps } from "@components/molecules/navigation/data";
import { Container, Logo, Button } from "@components/atoms";
import { Navigation } from "@components/molecules";

const Header = (props: INavigationProps) => {
  const { data } = props;

  return (
    <header style={{ marginTop: 50, marginBottom: 150 }}>
      <Container>
        <Row justify="space-between" align="middle">
          <Logo />
          <Space size={50}>
            <Navigation data={data} />
            <Button type="primary">Try the app, it’s free</Button>
          </Space>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
