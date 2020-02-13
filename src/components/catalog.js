import React, { useState, useRef, useCallback, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Container from "./container"
import Filters from "./catalog/filters"
import BooksList from "./catalog/books-list"
import { Breakpoints as bp } from "./global-styles"
import useBookSearch from "./catalog/useBookSearch"

const CatalogSection = styled.section`
  @media (max-width: ${bp.mobile}) {
    background: var(--lighter-grey);
  }
`

const CatalogHeader = styled(Container)`
  padding-top: 3em;
  padding-bottom: 3em;

  @media (max-width: ${bp.mobile}) {
    padding-bottom: 2.5em;
  }
`

const Title = styled.h2`
  position: relative;
  margin-top: 0;
  margin-bottom: 1em;
  font-family: var(--title-font);
  font-size: 2em;
  font-weight: 700;

  @media (max-width: ${bp.mobile}) {
    font-size: 1.8em;
  }
`

const Catalog = ({ isAdmin }) => {
  const [tagId, setTagId] = useState(-1)
  const [query, setQuery] = useState("")
  const [pageNumber, setPageNumber] = useState(1)
  const [books, setBooks] = useState([])

  const observer = useRef()

  const { hasMore, loading, error } = useBookSearch(
    tagId,
    query,
    pageNumber,
    setBooks
  )

  const lastBookElement = useCallback(
    node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  useEffect(() => {
    setPageNumber(1)
  }, [query, tagId])

  const handleTagChoose = tagId => {
    setTagId(tagId)
  }

  const handleSearch = e => {
    setQuery(e.target.value)
  }

  const toggleBookAvailability = bookId => {
    setBooks(prevBooks => {
      return prevBooks.map(bookData => {
        const { book } = bookData
        if (book.id === bookId) {
          const updatedBook = { ...book, isAvailable: !book.isAvailable }
          return { ...bookData, book: updatedBook }
        }
        return bookData
      })
    })
  }

  return (
    <CatalogSection>
      <CatalogHeader>
        <Title>Каталог книг</Title>
        <Filters
          tagId={tagId}
          handleTagChoose={handleTagChoose}
          handleSearch={handleSearch}
        />
      </CatalogHeader>
      <BooksList
        books={books}
        lastBookElement={lastBookElement}
        isAdmin={isAdmin}
        toggleBookAvailability={toggleBookAvailability}
      />
    </CatalogSection>
  )
}

export default Catalog
