import React from "react"
import styled from "styled-components"
import Button from "./button"
import { Breakpoints as bp } from "../global-styles"

const SlideBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-columns: 1fr 1fr; */
  height: 500px;

  @media (max-width: ${bp.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 250px;
    /* grid-template-rows: 250px 250px; */
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

const SlideText = styled.div`
  padding: 110px 4.17vw;
  font-size: 1.25em;

  strong {
    font-family: var(--title-font);
    font-size: 1.5em;
    font-weight: 700;
  }

  p {
    max-width: 640px;
    line-height: 150%;
  }

  @media (max-width: ${bp.mobile}) {
    padding-top: 0;
    padding-bottom: 4em;
    font-size: 1em;

    strong {
      font-size: 1.8em;
    }
  }
`

const Slide = ({
  // titleText = "Заголовок слайда",
  // description = "Описание слайда",
  button,
  imageSrc = "",
  imageAlt = "",
}) => {
  return (
    <SlideBox className="swiper-slide">
      <SlideImage>
        <img src={imageSrc} alt={imageAlt} />
      </SlideImage>
      {/* <SlideText>
        <strong>{titleText}</strong>
        <p>{description}</p>
        {button && <Button text={button.text} transparent />}
      </SlideText> */}
    </SlideBox>
  )
}

export default Slide
