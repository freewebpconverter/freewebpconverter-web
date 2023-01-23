import Head from "next/head";
import { Col, Row } from 'antd';

import { Container } from "components/atoms";
import { CircleAnimation } from "components/molecules";

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
      <Container>
        <article>
          <img srcSet="assets/img/logo@2x.webp 2x, assets/img/logo@3x.webp 3x" src="assets/img/logo.webp" />
          <h1>Free WebP Converter</h1>
          <h2>Under Construction</h2>
          <p>It will be at your service as soon as possible.</p>
        </article>
      </Container>
    </>
  );
}
