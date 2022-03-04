import React from "react";
import { SvgIcon } from "@mui/material";
import { IconProps } from "../interfaces";

interface ArrowProps extends IconProps {
  fill: string
}

const ArrowRight: React.FC<ArrowProps> = (props: ArrowProps) => {
  return (
    <SvgIcon
      viewBox="0 0 32 32"
      fontSize={props.size}
    >
      <path opacity="0.8" d="M18 9.25L16.95 10.3L21.825 15.25L6 15.25L6 16.75L21.825 16.75L16.95 21.7L18 22.75L24.75 16L18 9.25Z" fill={props.fill}/>
    </SvgIcon>
  )
}

export default ArrowRight