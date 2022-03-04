import React from "react";
import Reviews from "./Reviews/Reviews";
import UpcomingShows from "./UpcomingShows/UpcomingShows";

const Body: React.FC = () => {
  return (
    <>
      <UpcomingShows />
      <Reviews />
    </>
  )
}

export default Body;