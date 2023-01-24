import Head from "next/head";

import { CircleAnimation } from "components/molecules";
import { Header } from "components/organisms";

export default function Home() {
  return (
    <>
      <Head>
        <title>Free WebP Converter | Under Construction</title>
        <meta name="description" content="Free WebP Converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CircleAnimation />
      <Header />
    </>
  );
}
