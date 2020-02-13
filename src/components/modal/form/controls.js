import React from "react"
import styled from "styled-components"

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;

  & > *:not(:last-child) {
    margin-right: 1em;
  }
`

export default Controls
