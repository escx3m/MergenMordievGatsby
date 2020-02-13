import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Tag from "./filters/tag"
import Search from "./filters/search"
import { Breakpoints as bp } from "../global-styles"

const FiltersWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.9em;

  @media (max-width: ${bp.mobile}) {
    flex-direction: column;
    font-size: 0.8em;
  }
`

const FiltersList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  margin-right: 4em;
  padding: 0;
  font-size: inherit;

  li {
    &:not(:last-child) {
      margin-right: 1em;
      margin-bottom: 1em;
    }
  }

  @media (max-width: ${bp.mobile}) {
    margin-right: 0;
    margin-bottom: 1.5em;
  }
`

const Filters = ({ query, tagId, handleTagChoose, handleSearch }) => {
  const [tags, setTags] = useState([{ id: -1, title: "Все книги" }])

  useEffect(() => {
    axios.get("/api/tags").then(res => {
      setTags(prevTags => [...prevTags, ...res.data])
    })
  }, [])
  return (
    <div>
      <h3 className="visually-hidden">Фильтры по тематике</h3>
      <FiltersWrap>
        <FiltersList>
          {tags.map(tag => {
            const { title, id } = tag
            return (
              <li key={tag.id}>
                <Tag
                  tag={tag}
                  currentTagId={tagId}
                  handleTagChoose={handleTagChoose}
                />
              </li>
            )
          })}
        </FiltersList>
        <Search query={query} handleSearch={handleSearch} />
      </FiltersWrap>
    </div>
  )
}

export default Filters
