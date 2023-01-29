import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Poppins } from "@next/font/google";
import { appWithTranslation } from "next-i18next";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";

config.autoAddCss = false;

const fontPoppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
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

export default appWithTranslation(App);
