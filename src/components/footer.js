import React from "react"
import styled from "styled-components"
import Container from "./container"
import { Breakpoints as bp } from "./global-styles"

const FooterBox = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black);
`

const FooterContainer = styled(Container)`
  display: flex;
  padding-top: 32px;
  padding-bottom: 32px;
`

const MadeIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  color: var(--white);
  font-family: var(--title-font);
  font-size: 0.8em;

  & > p {
    display: flex;
    align-items: center;
    margin: 0;

    &:not(:first-child) {
      margin-left: 8em;
    }

    & > *:not(:first-child) {
      margin-left: 0.5em;
    }
  }

  @media (max-width: ${bp.mobile}) {
    flex-direction: column;

    & > p {
      &:not(:first-child) {
        margin-left: 0;
        margin-top: 1.2em;
      }

      & > *:not(:first-child) {
        margin-left: 0.5em;
      }
    }
  }
`

const Footer = () => {
  return (
    <FooterBox>
      <FooterContainer>
        <MadeIn>
          <p>
            <span>powered by Fedor D. </span>
          </p>
        </MadeIn>
      </FooterContainer>
    </FooterBox>
  )
}

export default Footer
