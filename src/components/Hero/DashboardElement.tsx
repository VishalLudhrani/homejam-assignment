import React from "react";
import { Box, Typography } from "@mui/material";
import { DashboardElementProps } from "../../interfaces";

const DashboardElement: React.FC<DashboardElementProps> = (props: DashboardElementProps) => {
  return (
    <Box
      sx={{
        width: "12rem",
        height: "12rem",
        borderRadius: "100%",
        border: "1px solid white",
        textAlign: "center",
        fontSize: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        my: 2,
        mx: "auto",
        mt: "6rem"
      }}
    >
      {props.icon}
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="body1">{props.subtitle}</Typography>
    </Box>
  )
}

export default DashboardElement;