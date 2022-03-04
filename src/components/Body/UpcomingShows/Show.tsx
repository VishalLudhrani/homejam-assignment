import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import { ShowProps } from "../../../interfaces";
import { ArrowRight, Ticket } from "../../../icons";

const Show: React.FC<ShowProps> = (show: ShowProps) => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          marginTop: "-0.5rem",
          marginLeft: "2rem",
          zIndex: -1,
          width: "21.5%",
          height: show.bgHeight,
          borderRadius: "8px",
          background: "linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%)"
        }}
      ></Box>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "#111229",
          color: "white",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          margin: "0.5rem 1.25rem",
          zIndex: 1
        }}
      >
        <CardMedia
          component="img"
          alt={show.speaker}
          width="100%"
          height="auto"
          image={show.image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            style={{
              backgroundColor: "#E5C558",
              display: "inline-block",
              padding: "4px",
              color: "black"
            }}
          >
            {show.category}
          </Typography>
          <Typography variant="h6">
            {show.speaker}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "auto 0.5rem"
          }}
        >
          <Button size="small" sx={{ color: "#0259EB" }} >More Info <ArrowRight size="large" fill="#0259EB" /></Button>
          <Button size="small"><Ticket size="medium" /></Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Show;