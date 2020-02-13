import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"
// import Auth from "../header/auth"
import { Breakpoints as bp } from "../global-styles"

const Menu = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;

  @media (max-width: ${bp.tablet}) {
    display: ${props => (props.isShown ? "block" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background: var(--white);
  }
`

const HeaderMenu = ({ isShown }) => {
  return (
    <Menu isShown={isShown}>
      <Navigation />
      {/* <Auth /> */}
    </Menu>
  )
}

export default HeaderMenu
