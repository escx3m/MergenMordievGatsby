import React from "react"
import styled from "styled-components"
import { Breakpoints as bp } from "../../global-styles"

const InputBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "title ." "input input";
  margin-bottom: 1em;

  label,
  span {
    padding: 0 calc(1em + 1px);
    font-size: 0.9em;

    @media (max-width: ${bp.mobile}) {
      font-size: 0.7em;
    }
  }

  label {
    grid-area: title;
  }

  span {
    color: ${props => (props.isValid ? "transparent" : "var(--error)")}
    text-align: right;
    transition: color 0.2s;
    user-select: ${props => (props.isValid ? "none" : "")}
  }

  input {
    grid-area: input;
    margin-top: 0.33em;
    padding: 0.7em 1em;
    font-weight: 300;
    line-height: 100%;
    border: 1px solid
      ${props => (props.isValid ? "var(--grey)" : "var(--error)")};
    border-radius: 6px;
    appearance: none;

    &:focus {
      border-color: var(--accent);

      &::placeholder {
        color: transparent;
      }
    }

    &:invalid {
      box-shadow: none;
    }
  }
`

const InputField = ({
  inputTitle,
  special,
  inputType = "text",
  id = "",
  inputPlaceholder = "Введите текст",
  isRequired = false,
  isValid = true,
  ...rest
}) => {
  const Title = inputTitle ? <label htmlFor={id}>{inputTitle}</label> : ""
  const Special = special ? <span>{special}</span> : ""

  return (
    <InputBox isValid={isValid}>
      {Title}
      {Special}
      <input
        type={inputType}
        id={id}
        name={id}
        placeholder={inputPlaceholder}
        required={isRequired}
      />
    </InputBox>
  )
}

export default InputField
