import React from "react"
import styled from "styled-components"
import Container from "./container"
import { Breakpoints as bp } from "./global-styles"
import Photo1 from "../images/photo1.jpg"
import Photo2 from "../images/photo2.jpg"
import Photo3 from "../images/photo3.jpg"
import Photo4 from "../images/photo4.jpg"
import Photo5 from "../images/photo5.jpg"
import Photo6 from "../images/photo6.jpg"
import Photo7 from "../images/photo7.jpg"
import Photo8 from "../images/photo8.jpg"
import Photo9 from "../images/photo9.jpg"
import Photo10 from "../images/photo10.jpg"
import Photo11 from "../images/photo11.jpg"
import Photo12 from "../images/photo12.jpg"

const AboutBox = styled.section``

const AboutContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ". picture" "map-img .";
  grid-gap: 3.33vw;
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-width: ${bp.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "." "picture" "." "map-img";
    padding-top: 3em;
    padding-bottom: 3em;
  }
`

const AboutText = styled.div`
  h1,
  h2 {
    margin: 0;
    margin-bottom: 0.33em;
    font-family: var(--title-font);
    font-weight: 700;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  p {
    margin: 1em 0;
    line-height: 150%;
  }

  @media (max-width: ${bp.tablet}) {
    h2 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 1.5em;
    }

    p {
      font-size: 0.9em;
    }
  }
`

const AboutImg = styled.div`
  grid-area: picture;
  & > img {
    line-height: 0;
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
`

const PortfolioContent = () => {
  return (
    <AboutBox>
      <AboutContainer>
        <AboutText>
          <AboutImg>
            <img src={Photo2} alt="Девушка над водой" />
            <img src={Photo8} alt="Девушка над водой" />
          </AboutImg>
        </AboutText>
        <AboutImg>
          <img src={Photo1} alt="Свадьба на фоне хурула" />
          <img src={Photo3} alt="Темнокожий парень" />
        </AboutImg>
        <AboutText>
          <AboutImg>
            <img src={Photo4} alt="Ночной хурул" />
            <img src={Photo5} alt="Девушка в горах" />
          </AboutImg>
        </AboutText>
        <AboutText>
          <AboutImg>
            <img src={Photo6} alt="Девушка над водой" />
            <img src={Photo7} alt="Девушка над водой" />
          </AboutImg>
        </AboutText>
        <AboutText>
          <AboutImg>
            <img src={Photo9} alt="Девушка над водой" />
            <img src={Photo11} alt="Девушка над водой" />
          </AboutImg>
        </AboutText>
        <AboutText>
          <AboutImg>
            <img src={Photo10} alt="Девушка над водой" />
            <img src={Photo12} alt="Девушка над водой" />
          </AboutImg>
        </AboutText>
      </AboutContainer>
    </AboutBox>
  )
}

export default PortfolioContent
