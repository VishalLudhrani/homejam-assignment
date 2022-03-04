import React from "react";
import { SvgIcon } from "@mui/material";
import { IconProps } from "../interfaces";

interface ArrowProps extends IconProps {
  fill: string
}

const ArrowLeft: React.FC<ArrowProps> = (props: ArrowProps) => {
  return (
    <SvgIcon
      viewBox="0 0 32 32"
      fontSize={props.size}
    >
      <path opacity="0.8" d="M14 22.75L15.05 21.7L10.175 16.75L26 16.75V15.25L10.175 15.25L15.05 10.3L14 9.25L7.25 16L14 22.75Z" fill={props.fill}/>
    </SvgIcon>
  )
}

export default ArrowLeft