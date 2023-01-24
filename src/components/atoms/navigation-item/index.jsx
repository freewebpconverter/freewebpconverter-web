import React from "react";

import { Typography } from "antd";

const { Link } = Typography;

const NavigationItem = (props) => {
  const { title, url } = props;

  return <Link href={url}>{title}</Link>;
};

export default NavigationItem;
