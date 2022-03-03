import React, { useEffect, useState } from "react";
import { Calendar, Likes, Users, Views } from "../../icons";
import DashboardElement from "./DashboardElement";
import Image from "./Image";
import Jumbotron from "./Jumbotron";
import Slider from "react-slick";
import useBreakpoint from "../../hooks/useBreakpoint";

const dashboardElements = [
  {
    icon: <Likes size="inherit" />,
    title: "456",
    subtitle: "Likes everyday",
  },
  {
    icon: <Calendar size="inherit" />,
    title: "745",
    subtitle: "Online Events"
  },
  {
    icon: <Users size="inherit" />,
    title: "+10K",
    subtitle: "Users"
  },
  {
    icon: <Views size="inherit" />,
    title: "+2",
    subtitle: "Views everyday"
  },
]

const Hero: React.FC = () => {
  const [ slidesCount, setSlidesCount ] = useState<number>(2);

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
        break;
      case 'sm':
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
      {/* hero image section */}
      <Image />

      {/* hero section typography */}
      {/* assuming that the desktop taskbar, and browser status bar weren't considered while designing; */}
      {/* and assuming the fact that the metrics are to be shown on the hero section, margin and padding are adjusted accordingly */}
      <Jumbotron />

      {/* dashboard */}
      <Slider {...sliderSettings} >
        {
          dashboardElements.map(element => {
            return (
              <DashboardElement key={element.title} {...element} />
            )
          })
        }
      </Slider>
    </>
  )
}

export default Hero;