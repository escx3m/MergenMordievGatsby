import React, { useState, useEffect } from "react"
import styled from "styled-components"

const StyledTag = styled.span`
  position: relative;
  box-sizing: border-box;
`

const StyledInput = styled.input`
  position: absolute;
  appearance: none;
  pointer-events: none;
`

const StyledLabel = styled.label`
  position: relative;
  display: inline-flex;
  padding: 0.5em 1em;
  background: var(--light-grey);
  font-size: inherit;
  line-height: 100%;
  border-radius: 4px;
  cursor: pointer;

  &:hover:not(:active) {
    /* todo */
  }

  input:checked + & {
    background: var(--accent);
    color: var(--white);
  }
`

const Tag = ({ tag, currentTagId, handleTagChoose }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => setChecked(currentTagId === tag.id), [currentTagId])
  const handleClick = () => {
    handleTagChoose(tag.id)
  }
  return (
    <StyledTag>
      <StyledInput
        type="checkbox"
        id={tag.id}
        onChange={handleClick}
        checked={checked}
      />
      <StyledLabel htmlFor={tag.id}>{tag.title}</StyledLabel>
    </StyledTag>
  )
}

export default Tag
