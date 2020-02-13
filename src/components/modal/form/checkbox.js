import React from "react"
import styled from "styled-components"
import CheckIcon from "../../../images/check_icon.svg"

const CheckboxContainer = styled.div`
  position: relative;
  padding-left: 40px;

  input[type="checkbox"] {
    position: absolute;
    appearance: none;
    opacity: 0;

    &:focus + label::before {
      border-color: var(--accent);
    }

    &:checked + label::after {
      background: url("${CheckIcon}");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 10px auto;
    }
  }

  label {
    cursor: pointer;

    &::selection {
      background: var(--lighter-grey);
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 12px;
      display: block;
      width: 1rem;
      height: 1rem;
      border-radius: 3px;
    }

    &::before {
      border: 1px solid var(--grey);
    }
  }
`

const Checkbox = ({
  isRequired = false,
  isChecked = false,
  checkboxId = "",
  children,
  ...rest
}) => {
  return (
    <CheckboxContainer>
      <input
        type="checkbox"
        id={checkboxId}
        name={checkboxId}
        required={isRequired}
        defaultChecked={isChecked}
      />
      <label htmlFor={checkboxId}>{children}</label>
    </CheckboxContainer>
  )
}

export default Checkbox
