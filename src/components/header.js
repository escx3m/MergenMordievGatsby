import React, { useState } from "react"
import styled from "styled-components"
import Container from "./container"
import Logotype from "./header/logotype"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import HeaderMenu from "./header/menu"
import MenuButton from "./header/menu-button"

const StyledHeader = styled.header`
  background: var(--lightest-grey);
`

const HeaderContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
`

const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)

  const menuClickHandler = () => {
    setIsMenuShown(!isMenuShown)

    if (isMenuShown) {
      enableBodyScroll(undefined, {
        reserveScrollBarGap: true,
      })
    } else {
      disableBodyScroll(undefined, {
        reserveScrollBarGap: true,
      })
    }
  }

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logotype />
        <HeaderMenu isShown={isMenuShown} />
        <MenuButton isShown={isMenuShown} clickHandler={menuClickHandler} />
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
