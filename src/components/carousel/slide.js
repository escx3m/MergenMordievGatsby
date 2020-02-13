import React from "react"
import styled from "styled-components"
import { Breakpoints as bp } from "../global-styles"

const SlideBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 500px;

  @media (max-width: ${bp.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 250px;
  }
`

const SlideImage = styled.div`
  position: relative;
  display: flex;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  img {
    object-fit: cover;
  }

  @media (max-width: ${bp.mobile}) {
    &::after {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
`

const Slide = ({ imageSrc = "", imageAlt = "" }) => {
  return (
    <SlideBox className="swiper-slide">
      <SlideImage>
        <img src={imageSrc} alt={imageAlt} />
      </SlideImage>
    </SlideBox>
  )
}

export default Slide
