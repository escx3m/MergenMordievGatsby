import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  padding: 0 0 0.33em;
  font-weight: 400;
  font-family: inherit;
  font-size: inherit;
  color: var(--accent);
  background: none;
  border: none;
  border-bottom: 1px dashed transparent;
  outline: 0;
  cursor: pointer;

  &[disabled] {
    color: var(--grey);
    background: var(--light-grey);
    cursor: not-allowed;
  }
  &:hover {
    border-bottom-color: var(--accent);
  }
  &:active {
    opacity: 0.7;
  }
`

const Button = ({ text = "button", ...rest }) => {
  return <StyledButton {...rest}>{text}</StyledButton>
}

export default Button
