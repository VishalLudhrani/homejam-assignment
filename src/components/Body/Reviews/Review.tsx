import { Avatar, Card, CardContent, CardHeader, Typography, Box } from "@mui/material";
import React from "react";
import { ReviewProps } from "../../../interfaces";

const Review: React.FC<ReviewProps> = (props: ReviewProps) => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          marginTop: "-0.5rem",
          marginLeft: "2rem",
          zIndex: -1,
          width: `calc(${props.cardWidth} + 1rem)`,
          height: props.bgHeight,
          borderRadius: "8px",
          background: "linear-gradient(143.63deg, #276C73 5.43%, #5293E8 110.6%)"
        }}
      ></Box>
      <Card
        sx={{
          width: props.cardWidth,
          backgroundColor: "#111229",
          color: "white",
          border: "2px solid #E5C558",
          padding: "1rem",
          marginRight: "1.25rem",
          marginTop: "0.5rem",
          marginBottom: "1.5rem",
          zIndex: 1,
          borderRadius: "16px"
        }}
      >
        <CardHeader
          avatar={
            <Avatar src={props.userImage}></Avatar>
          }
          title={<Typography variant="h6" style={{ fontSize: "1rem" }}>{props.username}</Typography>}
          subheader={<Typography color="#E5C558" variant="body2">{props.country}</Typography>}
        />
        <CardContent>
          <Typography variant="body2">{props.review}</Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Review;