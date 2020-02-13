import React from "react"
import styled from "styled-components"
import { Breakpoints as bp } from "../../global-styles"

const SearchBox = styled.form`
  display: flex;

  @media (max-width: ${bp.mobile}) {
    width: 100%;
  }
`

const Input = styled.input`
  width: 320px;
  margin-right: 0.5em;
  padding: calc(0.5em - 1px) calc(1em - 1px);
  border: 1px solid var(--grey);
  border-radius: 0.5em;

  &:focus {
    border-color: var(--accent-light);
    outline: 0;

    &::placeholder {
      color: transparent;
    }
  }

  @media (max-width: ${bp.mobile}) {
    flex-grow: 1;
  }
`

const Submit = styled.input`
  padding: 0.5em 1em;
  background: var(--accent);
  color: var(--white);
  border: 0;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover {
    background: var(--accent-light);
  }
`

const Search = ({ query, handleSearch }) => {
  return (
    <SearchBox>
      <Input placeholder="Поиск книги" value={query} onChange={handleSearch} />
      <Submit type="submit" value="Найти" />
    </SearchBox>
  )
}

export default Search
