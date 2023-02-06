import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

const Icon = ({ ...rest }: FontAwesomeIconProps) => {
  return <FontAwesomeIcon {...rest} />;
};

export default Icon;
