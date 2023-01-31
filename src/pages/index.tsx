import Head from "next/head";
import { Container, Title } from "@components/atoms";
import { Header, DragSection } from "@components/organisms";
import { Space, Row, Col } from "antd";

import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { primary } from "@/theme/color";

type Props = {};

const Home = () => {
  const { t } = useTranslation("navigation");

  let navigationData = [
    {
      url: "/about",
      title: t("about"),
    },
    {
      url: "/features",
      title: t("features"),
    },
    {
      url: "/contact",
      title: t("contact"),
    },
  ];

  return (
    <>
      <Head>
        <title>Free WebP Converter | Convert Any Image File</title>
        <meta
          name="description"
          content="Free WebP Converter is an image file converter. Convert any image files to WEBP format in seconds."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={navigationData} />
      <Container>
        <Row justify="space-between" align="middle" gutter={50}>
          <Col span={12}>
            <Space direction="vertical">
              <Title level={1} style={{ margin: 0, color: primary.main }}>
                Free WebP Converter
              </Title>
              <Title level={2} style={{ margin: 0 }}>
                Convert Any Image File.
              </Title>
            </Space>
          </Col>
          <Col span={12}>
            <DragSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "tr", ["navigation"])),
  },
});

export default Home;
