import Head from "next/head";
import { Header } from "@components/organisms";

import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

type Props = {};

const Contact = () => {
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
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "tr", ["navigation"])),
  },
});

export default Contact;
