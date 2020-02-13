import React from "react"
import styled from "styled-components"
import { Breakpoints as bp } from "../global-styles"

const StyledButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: none;
  width: 4em;
  height: 100%;
  padding: 0;
  background: 0;
  border: 0;
  outline: 0;
  cursor: pointer;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 50%;
    height: 2px;
    background: var(--black);
    transform: translate(-50%, -50%);
    transition: transform 0.2s, opacity 0.2s;
  }

  span:first-child {
    transform: ${props =>
      props.isShown
        ? "translate(-50%, -50%) rotate(-45deg)"
        : "translate(-50%, calc(-50% - 8px))"};
  }

  span:nth-child(2) {
    opacity: ${props => (props.isShown ? "0" : "1")};
  }

  span:last-child {
    transform: ${props =>
      props.isShown
        ? "translate(-50%, -50%) rotate(45deg)"
        : "translate(-50%, calc(-50% + 8px))"};
  }

  &:hover,
  &:focus {
    span {
      background: var(--light-grey);
    }
  }

  @media (max-width: ${bp.tablet}) {
    display: block;
    z-index: 3;
  }
`

const MenuButton = ({ isShown, clickHandler }) => {
  return (
    <StyledButton
      type="button"
      isShown={isShown}
      onClick={() => clickHandler(!isShown)}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledButton>
  )
}

export default MenuButton
