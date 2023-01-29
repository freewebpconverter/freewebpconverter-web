import React from "react";

import { Button } from "@components/atoms";
import { Space } from "antd";
import Link from "next/link";

type NavigationProps = {
  data: {
    url: string;
    title: string;
  }[];
};

const Navigation = (props: NavigationProps) => {
  const { data } = props;

  return (
    <Space wrap>
      {/* {data.map((item, index) => (
        <Link href={item.url} key={index}>
          <Button type="link">{item.title}</Button>
        </Link>
      ))} */}
    </Space>
  );
};

export default Navigation;
