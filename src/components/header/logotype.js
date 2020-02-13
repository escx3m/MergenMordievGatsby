import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Breakpoints as bp } from "../global-styles"
import MergenLogo from "../../images/MergenLogo.png"

const LogoContainer = styled(Link)`
  display: flex;
  margin-right: 8.33vw;
  font-family: var(--title-font);

  &&[href]:hover {
    text-decoration: none;
  }

  @media (max-width: ${bp.desktop}) {
    margin-right: 4vw;
  }

  @media (max-width: ${bp.tablet}) {
    z-index: 3;
  }
`
const LogoText = styled.span`
  padding: 4px 12px;
  color: ${props => (props.inverted ? "var(--white)" : "var(--black)")};
  font-size: 36px;
  font-weight: 700;
  line-height: 100%;
  background: ${props => (props.inverted ? "var(--black)" : "")};
  transition: color 0.2s, background 0.2s;

  a[href]:hover > && {
    color: ${props => (props.inverted ? "var(--white)" : "var(--grey)")};
    background: ${props => (props.inverted ? "var(--grey)" : "")};
  }

  @media (max-width: ${bp.desktop}) {
    font-size: 1.2em;
  }

  @media (max-width: ${bp.mobile}) {
    font-size: 1em;
  }
`
const Icon = styled.span`
  display: inline-block;
  width: 3em;
  height: 3em;
  margin-right: 0.8em;

  @media (max-width: ${bp.desktop}) {
    width: 2em;
    height: 2em;
  }

  @media (max-width: ${bp.mobile}) {
    width: 1.5em;
    height: 1.5em;
  }
`

const Logotype = () => {
  return (
    <LogoContainer to="/">
      <Icon>
        <img src={MergenLogo} alt="Фотография со мной" />
      </Icon>
      <LogoText inverted>Мерген</LogoText>
      <LogoText>Мордиев</LogoText>
    </LogoContainer>
  )
}

export default Logotype
