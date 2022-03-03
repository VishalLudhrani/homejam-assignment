import React from "react";
import { Box } from "@mui/material";

const Image: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: -1,
        width: "100%",
        height: "100%",
        backgroundImage: "url('../../images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(180deg, rgba(5, 11, 20, 0.28) 0%, rgba(1, 13, 32, 0.69) 67.53%, #0A0B1A 85.33%)",
          width: "100%",
          height: "100%",
          zIndex: 1,
          position: "absolute",
          top: 0,
          left: 0
        }}
      ></Box>
    </Box>
  )
}

export default Image;