import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  font-weight: ${props => props.weight || "500"};
  font-family: inherit;
  font-size: ${props => props.customSize || "inherit"};
  line-height: 100%;
  color: ${props => (props.transparent ? "var(--accent)" : "var(--white)")};
  background: ${props => (props.transparent ? "transparent" : "var(--accent)")};
  border: ${props => props.borderWidth || "0.1em"} solid var(--accent);
  border-radius: calc(1em / 3);
  padding: ${props => props.paddings || "0.4em 1em"};
  outline: 0;
  cursor: pointer;

  &[disabled] {
    color: var(--grey);
    background: var(--light-grey);
    border-color: var(--light-grey);
    cursor: not-allowed;
  }

  &:not([disabled]):hover:not(:active),
  &:not([disabled]):focus:not(:active) {
    color: ${props =>
      props.transparent ? "var(--accent-light)" : "var(--white)"};
    background: ${props =>
      props.transparent ? "transparent" : "var(--accent-light)"};
    border-color: var(--accent-light);
  }
`

const Button = ({
  text = "button",
  buttonType = "button",
  isDisabled = false,
  ...rest
}) => {
  return (
    <StyledButton {...rest} type={buttonType} disabled={isDisabled}>
      {text}
    </StyledButton>
  )
}

export default Button
