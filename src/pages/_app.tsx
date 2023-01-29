import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { appWithTranslation } from "next-i18next";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
