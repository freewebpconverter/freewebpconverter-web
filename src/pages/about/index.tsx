import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { Button } from "@components/atoms";

type Props = {};

const AboutPage = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Button type="primary">{t("about")}</Button>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "tr", ["common"])),
  },
});

export default AboutPage;
