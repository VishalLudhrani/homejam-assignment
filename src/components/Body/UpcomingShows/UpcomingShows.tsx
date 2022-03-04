import { Box, Link, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import useBreakpoint from "../../../hooks/useBreakpoint";
import Slider from "react-slick";
import Show from "./Show";

const shows = [
  {
    image: "../../images/speakers/bennydeyal.png",
    speaker: "Benny Dayal",
    category: "Folk"
  },
  {
    image: "../../images/speakers/vijayyesudas.png",
    speaker: "Vijay Yesudas",
    category: "Bollywood"
  },
  {
    image: "../../images/speakers/andreajeremiah.png",
    speaker: "Andrea Jeremiah",
    category: "Folk"
  },
  {
    image: "../../images/speakers/shilparao.png",
    speaker: "Shilpa Rao",
    category: "Folk"
  },
]

const UpcomingShows: React.FC = () => {
  const [ slidesCount, setSlidesCount ] = useState<number>(2);
  const [ bgHeight, setBgHeight ] = useState<string>('95%');

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesCount,
    slidesToScroll: 1,
    arrows: false
  }

  const breakpoint = useBreakpoint();

  useEffect(() => {
    switch (breakpoint) {
      case 'xs':
        setSlidesCount(1.5);
        setBgHeight("85%");
        break;
        case 'sm':
        setBgHeight("95%");
        setSlidesCount(2.5);
        break;
      case 'md':
        setSlidesCount(3.5);
        break;
      case 'lg':
      case 'xl':
        setSlidesCount(4);
        break;
      default:
        setSlidesCount(slidesCount+0.5);
        break;
    }
  }, [breakpoint, slidesCount])

  return (
    <>
      {/* heading and a link to view all the upcoming shows */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "6rem",
          mb: "2rem"
        }}
      >
        <Typography variant="h5">Upcoming Shows</Typography>
        <Typography variant="body1">
          <Link underline="none" color="#E5C558" href="#">View All</Link>
        </Typography>
      </Box>

      {/* card container for shows */}
      <Slider {...sliderSettings} >
        {
          shows.map((show, pos) => {
            return (
              <Show key={pos} {...show} bgHeight={bgHeight} />
            )
          })
        }
      </Slider>
    </>
  )
}

export default UpcomingShows;