import React from "react";
import Link from "next/link";

import { NavigationItem } from "components/atoms";

const Navigation = () => {
  return (
    <nav>
      <NavigationItem title="About" url="/about" />
    </nav>
  );
};

export default Navigation;
