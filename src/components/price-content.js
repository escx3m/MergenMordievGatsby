import React from "react"
import styled from "styled-components"
import Container from "./container"
import { Breakpoints as bp } from "./global-styles"

const TermsContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-width: ${bp.tablet}) {
    padding-top: 3em;
    padding-bottom: 3em;
  }
`

const Section = styled.section`
  h2 {
    margin: 0;
    margin-bottom: 0.33em;
    font-family: var(--title-font);
    font-weight: 700;
  }

  h2 {
    font-size: 2em;
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

const PriceContent = () => {
  return (
    <TermsContainer>
      <h1 className="visually-hidden">Тарифы и условия</h1>
      <Section>
        <Container>
          <h2>Тарифы</h2>
          <p>asdasdasdasdasdasdaskdjasjdaksjdlkasjdkjaskldjk</p>
        </Container>
      </Section>
    </TermsContainer>
  )
}

export default PriceContent
