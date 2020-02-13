import React from "react"
import styled from "styled-components"
import Container from "./container"
import { Breakpoints as bp } from "./global-styles"
import Icon from "../components/header/navigation/icon"
import InstagramIcon from "../images/instagram-icon"
import VkIcon from "../images/vkIcon.svg"
import Phone from "../images/phone.svg"

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

const ListReset = styled.ul`
  list-style: none;
  margin: 3em 0;
  padding: 0;
`

const PricingList = styled(ListReset)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  justify-content: center;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3em;
    background: var(--lighter-grey);
    border-bottom: 4px solid var(--light-grey);

    b {
      position: absolute;
      top: 0.5em;
      right: 1em;
      color: var(--error);
      font-weight: 500;
    }

    strong {
      margin-bottom: 0.3em;
      color: var(--accent);
      font-family: var(--title-font);
      font-size: 1.9em;
      font-weight: 600;
    }

    small {
      margin-bottom: 1.5em;
      color: var(--grey);
      font-size: 1em;
      letter-spacing: 0.05em;
    }
  }
`

const PriceTag = styled.p`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-family: var(--title-font);
    font-size: 1.5em;
    letter-spacing: 0.05em;

    & > *:not(:first-child) {
      margin-bottom: 1em;
    }

    s {
      color: var(--soft-grey);
      font-size: 0.8em;
    }
  }
`

const List = styled(ListReset)`
  margin: 1.5em 0;

  li {
    position: relative;
    display: block;
    padding-left: 1.5em;
    line-height: 130%;

    &:not(:last-child) {
      margin-bottom: 0.5em;
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "—";
      display: inline-block;
      margin-right: 0.5em;
    }
  }

  strong {
    font-weight: 500;
  }
`

const ContactContent = () => {
  return (
    <TermsContainer>
      <h1 className="visually-hidden">Тарифы и условия</h1>
      <Section>
        <Container>
          <h2>Я всегда на связи. Пишите!</h2>
          <p>
            <a
              href="https://www.instagram.com/mergen_samurai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <InstagramIcon width="100%" height="100%" />
              </Icon>
              Instagram - @mergen_samurai
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/mergen_samurai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <img src={VkIcon} alt="Иконка ВК" width="100%" height="100%" />
              </Icon>
              Вконтакте - Mergen Mordiev
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/mergen_samurai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <img
                  src={Phone}
                  alt="Иконка сотового телефона"
                  width="100%"
                  height="100%"
                />
              </Icon>
              <a href="tel:+79615467430">+7 (961) 546-74-30</a>
            </a>
          </p>
        </Container>
      </Section>
    </TermsContainer>
  )
}

export default ContactContent
