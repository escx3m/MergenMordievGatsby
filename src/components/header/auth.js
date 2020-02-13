import React from "react"
import styled from "styled-components"
import Button from "../button"
import { Breakpoints as bp } from "../global-styles"

const StyledAuth = styled.div`
  margin-left: auto;

  & > *:not(:last-child) {
    margin-right: 1.5em;
  }

  @media (max-width: ${bp.tablet}) {
    margin: 0 auto;
    padding: 0 4.17vw;
  }
`

const Auth = () => {
  return (
    <StyledAuth>
      <Button text="Войти" />
      <Button text="Зарегистрироваться" transparent />
    </StyledAuth>
  )
}

export default Auth
