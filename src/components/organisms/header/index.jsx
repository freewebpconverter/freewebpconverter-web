import React from "react";
import Link from "next/link";

import { Container } from "components/atoms";
import { Navigation } from "components/molecules";

const Header = () => {
  return (
    <Container>
      <header>
        <Link href="/">
          <img
            srcSet="assets/img/logo@2x.webp 2x, assets/img/logo@3x.webp 3x"
            src="assets/img/logo.webp"
          />
        </Link>
        <Navigation />
      </header>
    </Container>
  );
};

export default Header;
