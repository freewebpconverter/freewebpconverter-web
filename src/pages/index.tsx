import Head from "next/head";

import {
  Container,
  Title,
  Paragraph,
  CircleAnimation,
} from "@components/atoms";

import {
  Header,
  Footer,
  DragSection,
  FeaturesSection,
  PopularSitesUsingSection,
  PerformanceSection,
  SponsorSection,
} from "@components/organisms";

import { Space, Row, Col } from "antd";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { primary, text } from "@/theme/color";

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
      <CircleAnimation />
      <Container>
        <Row justify="space-between" align="middle" gutter={90}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Space direction="vertical" size={0}>
              <Title level={1} style={{ margin: 0, color: primary.main }}>
                Free WebP Converter
              </Title>
              <Title level={2} style={{ marginBottom: 10, marginTop: 10 }}>
                Convert Any Image File.
              </Title>
              <Paragraph size={21} color={text.main}>
                Free WebP Converter is an image file converter. Convert any
                image files to WEBP format in seconds.
              </Paragraph>
            </Space>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <DragSection />
          </Col>
        </Row>
        <FeaturesSection />
      </Container>
      <PopularSitesUsingSection />
      <PerformanceSection />
      <SponsorSection />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "tr", ["navigation"])),
  },
});

export default Home;
