import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import nextI18NextConfig from "../../next-i18next.config";
import Script from "next/script";

import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { appWithTranslation } from "next-i18next";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ConfigProvider } from "antd";

config.autoAddCss = false;

const fontPoppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: fontPoppins.style.fontFamily,
        },
      }}
    >
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-FS71XRSB37"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-FS71XRSB37');
        `}
      </Script>
      <Component {...pageProps} />
    </ConfigProvider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
