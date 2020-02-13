import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Icon from "./navigation/icon"
import { Breakpoints as bp } from "../global-styles"
import InstagramIcon from "../../images/instagram-icon"
import VkIcon from "../../images/vkIcon.svg"

const StyledNav = styled.nav`
  box-sizing: border-box;
  margin-right: 8.33vw;

  @media (max-width: ${bp.desktop}) {
    margin-right: 4vw;
  }

  @media (max-width: ${bp.tablet}) {
    margin: 6em 0 4em;
  }
`

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: var(--title-font);

  li {
    font-weight: 500;
    line-height: 100%;

    &:not(:last-child) {
      margin-right: 2em;
    }
  }

  a[href] {
    display: inline-flex;
    align-items: center;
    padding: 0.33em 0;
    border: 1px dashed transparent;

    &:hover {
      color: var(--grey);
      text-decoration: none;
      border-bottom-color: currentColor;
    }

    &:active {
      opacity: 0.7;
    }
  }

  @media (max-width: ${bp.tablet}) {
    flex-direction: column;

    li {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 2em;
      }
    }
  }
`

const Navigation = () => {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <Link to="/about">Обо мне</Link>
        </li>
        <li>
          <Link to="/portfolio">Портфолио</Link>
        </li>
        <li>
          <Link to="/price">Прайс</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mergen_samurai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <InstagramIcon width="100%" height="100%" />
            </Icon>
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://vk.com/samuraidancer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <img src={VkIcon} alt="Иконка ВК" width="100%" height="100%" />
            </Icon>
            Вконтакте
          </a>
        </li>
      </StyledList>
    </StyledNav>
  )
}

export default Navigation
