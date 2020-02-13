import React from "react"
import styled from "styled-components"
import Container from "./container"
import { Breakpoints as bp } from "./global-styles"
import Icon from "../components/header/navigation/icon"
import InstagramIcon from "../images/instagram-icon"
import VkIcon from "../images/vkIcon.svg"
import Phone from "../images/phone.svg"
import PhoneViber from "../images/viber.svg"

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
              href="https://vk.com/samuraidancer"
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
            <a target="_blank" rel="noopener noreferrer">
              <Icon>
                <img
                  src={Phone}
                  alt="Иконка сотового телефона воцап"
                  width="100%"
                  height="100%"
                />
              </Icon>
              WhatsApp
              <a href="tel:+79275942810">+7 (927) 594-28-10</a>
            </a>
          </p>
          <p>
            <a target="_blank" rel="noopener noreferrer">
              <Icon>
                <img
                  src={PhoneViber}
                  alt="Иконка сотового телефона вайбер"
                  width="100%"
                  height="100%"
                />
              </Icon>
              Viber
              <a href="tel:+79613982810">+7 (961) 398-28-10</a>
            </a>
          </p>
        </Container>
      </Section>
    </TermsContainer>
  )
}

export default ContactContent
