import React from "react";
import { Box, Typography } from "@mui/material";

const Jumbotron: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "55%" },
        marginTop: { xs: "75%", sm: "25%", md: "10%" }
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" }
        }}
      >
        Cari Cari
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ 
          width: { xs: "90%", md: "100%" },
          fontSize: { xs: "1rem", md: "1.5rem" },
          marginTop: 1
        }} 
      >
        Live from their sofa to yours. Get closer to your favorite artists, and never miss out.
      </Typography>
    </Box>
  )
}

export default Jumbotron;