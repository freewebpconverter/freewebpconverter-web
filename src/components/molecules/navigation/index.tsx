import React from "react";
import Link from "next/link";

import { INavigationProps } from "./data";
import { Button } from "@components/atoms";
import { Space } from "antd";

const Navigation = (props: INavigationProps) => {
  const { data } = props;

  return (
    <Space wrap size={50}>
      {data.map((item, index) => (
        <Link href={item.url} key={index}>
          <Button type="link">{item.title}</Button>
        </Link>
      ))}
    </Space>
  );
};

export default Navigation;
