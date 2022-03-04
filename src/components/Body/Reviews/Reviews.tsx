import { Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "../../../icons";
import useBreakpoint from "../../../hooks/useBreakpoint";
import Review from "./Review";

const reviews = [
  {
    userImage: "../../images/users/reviewuser1.png",
    username: "Hellen Jummy",
    country: "Palo Alto, CA",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque atque dolor earum nisi libero fugiat vel provident sequi, quasi sit rem velit doloremque."
  },
  {
    userImage: "../../images/users/reviewuser2.png",
    username: "Hellen Jummy",
    country: "Palo Alto, CA",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque atque dolor earum nisi libero fugiat vel provident sequi, quasi sit rem velit doloremque."
  },
  {
    userImage: "../../images/users/reviewuser1.png",
    username: "Hellen Jummy",
    country: "Palo Alto, CA",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque atque dolor earum nisi libero fugiat vel provident sequi, quasi sit rem velit doloremque."
  },
]

const Reviews: React.FC = () => {
  const [ slidesCount, setSlidesCount ] = useState<number>(2);
  const [ cardWidth, setCardWidth ] = useState<string>('20rem');

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
        setSlidesCount(1.05);
        setCardWidth("16rem");
        break;
        case 'sm':
        setCardWidth("20rem");
        setSlidesCount(1.75);
        break;
      case 'md':
        setSlidesCount(2.25);
        break;
      case 'lg':
      case 'xl':
        setSlidesCount(3);
        break;
      default:
        setSlidesCount(slidesCount+0.5);
        break;
    }
  }, [breakpoint, slidesCount])
  
  return (
    <>
      {/* heading for the section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "6rem",
          mb: "2rem"
        }}
      >
        <Typography variant="h5">Reviews</Typography>
        <Box
          sx={{
            display: "flex",
            alignContent: "center"
          }}
        >
          <Typography variant="body1" style={{ margin: "auto 0.5rem" }}>1 / 12</Typography>
          <ArrowLeft size="large" fill="white" />
          <ArrowRight size="large" fill="white" />
        </Box>
      </Box>

      {/* card container for reviews */}
      <Slider {...sliderSettings} >
        {
          reviews.map((review, pos) => {
            return (
              <Review cardWidth={cardWidth} key={pos} {...review} bgHeight="80%" />
            )
          })
        }
      </Slider>
    </>
  )
}

export default Reviews;