import React from "react";

import { Container } from "@components/atoms";
import { Navigation } from "@components/molecules";
import { NextComponentType, NextPageContext } from "next/types";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: NextComponentType<NextPageContext, any, any> = ({
  children,
}: MainTemplateProps) => {
  return (
    <>
      <Container>
        <Navigation />
      </Container>
      {children}
    </>
  );
};

export default MainTemplate;
