import "@/styles/globals.css";

import { ConfigProvider } from "antd";
import { ThemeData } from "data";

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
    componentSize="50px"
      theme={{
        components: {
          Typography: {
            colorLink: "red",
            colorLinkHover: "yellow",
            fontSize: 50,
            fontWeightStrong: 700,
          },
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
