import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Poppins } from "@next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";

import { appWithTranslation, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";

config.autoAddCss = false;

const fontPoppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

type Props = {};

const App = ({ Component, pageProps }: AppProps) => {
  const { t, i18n, ready } = useTranslation();

  if (!ready) return 'loading translations...';

  const data = t('navigation', { returnObjects: true });

  console.log("data: ", data);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: fontPoppins.style.fontFamily,
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "tr", ["common"])),
  },
});

export default appWithTranslation(App);
