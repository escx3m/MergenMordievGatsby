import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin-top: auto;
`

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  color: var(--white);
  text-align: center;
  background: ${props => (props.isChecked ? "var(--accent)" : "var(--error)")};
  border-radius: 0.3em;
  cursor: pointer;
  user-select: none;
  transition: background 0.2s ease-in-out;

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  &:hover:not(:active) {
    background: ${props =>
      props.isChecked ? "var(--accent-light)" : "var(--error-light)"};
  }
`

const StatusControl = ({ isChecked, book, toggleBookAvailability }) => {
  const [loading, setLoading] = useState(false)

  const handleChange = () => {
    setLoading(true)
    const updatedBook = { ...book, isAvailable: !book.isAvailable }
    axios
      .put(`/api/books/${book.id}`, updatedBook)
      .then(res => {
        toggleBookAvailability()
        setLoading(false)
      })
      .catch(e => {
        setLoading(false)
      })
  }
  return (
    <Container>
      <Label isChecked={isChecked}>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        {loading ? "..." : isChecked ? "В наличии" : "На руках"}
      </Label>
    </Container>
  )
}

export default StatusControl
