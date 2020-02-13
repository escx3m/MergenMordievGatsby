import React from "react"
import Swiper from "react-id-swiper"
import "./carousel/swiper.css"
import "./carousel/carousel.css"
import Slide from "./carousel/slide"
import first from "../images/first.jpg"
import second from "../images/second.jpg"
import third from "../images/third.jpg"
import fourth from "../images/fourth.jpg"

const data = [
  {
    src: first,
    alt: "Фотография в объективе",
  },
  {
    src: second,
    alt: "Девушка останавливает поезд",
  },
  {
    src: third,
    alt: "Девушка под дождем с зонтом",
  },
  {
    src: fourth,
    alt: "Парень держит девушку на весу",
  },
]

const slides = data.map((item, index) => (
  <Slide imageSrc={item.src} imageAlt={item.alt} key={index} />
))

const Carousel = () => {
  const params = {
    speed: 500,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 0,
  }

  return <Swiper {...params}>{slides}</Swiper>
}

export default Carousel
