import { SvgIcon } from "@mui/material";
import React from "react";

const Hamburger: React.FC = () => {
  return (
    <SvgIcon viewBox="0 0 24 24" >
      <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="white"/>
      <path d="M2 12.1071C2 11.5548 2.44772 11.1071 3 11.1071H21C21.5523 11.1071 22 11.5548 22 12.1071C22 12.6593 21.5523 13.1071 21 13.1071H3C2.44772 13.1071 2 12.6593 2 12.1071Z" fill="white"/>
      <path d="M3 17.2141C2.44772 17.2141 2 17.6618 2 18.2141C2 18.7664 2.44772 19.2141 3 19.2141H21C21.5523 19.2141 22 18.7664 22 18.2141C22 17.6618 21.5523 17.2141 21 17.2141H3Z" fill="white"/>
    </SvgIcon>
  )
}

export default Hamburger;