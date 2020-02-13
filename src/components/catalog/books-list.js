import React, { useState } from "react"
import styled from "styled-components"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import Container from "../container"
import BookCard from "./books-list/book-card"
import { Breakpoints as bp } from "../global-styles"
import BookInfo from "./book-info"

const StyledList = styled(Container)`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-column-gap: 2em;
  grid-row-gap: 3em;
  justify-content: center;
  padding-bottom: 6em;

  @media (max-width: ${bp.mobile}) {
    grid-column-gap: 1em;
    grid-row-gap: 2em;
    padding-bottom: 3.5em;
  }
`

const BooksList = ({
  books,
  lastBookElement,
  isAdmin,
  toggleBookAvailability,
}) => {
  const [book, setBook] = useState({})
  const [isShown, setIsShown] = useState(false)

  const showBookInfo = book => {
    setBook(book)
    setIsShown(true)
    disableBodyScroll(undefined, {
      reserveScrollBarGap: true,
    })
    window.addEventListener("keydown", onEscPress)
  }

  const closeBookInfo = evt => {
    if (evt.target === evt.currentTarget || evt.keyCode === 27) {
      setIsShown(false)
      enableBodyScroll(undefined, {
        reserveScrollBarGap: true,
      })
      window.removeEventListener("keydown", onEscPress)
    }
  }

  const onEscPress = evt => {
    closeBookInfo(evt)
  }

  return (
    <StyledList>
      {books.map((item, index) => {
        const { book, tags } = item
        if (books.length === index + 1) {
          return (
            <div key={book.id} ref={lastBookElement}>
              <BookCard
                book={book}
                tags={tags}
                showBookInfo={showBookInfo}
                isAdmin={isAdmin}
                toggleBookAvailability={toggleBookAvailability}
              />
            </div>
          )
        } else {
          return (
            <BookCard
              key={book.id}
              book={book}
              tags={tags}
              showBookInfo={showBookInfo}
              isAdmin={isAdmin}
              toggleBookAvailability={toggleBookAvailability}
            />
          )
        }
      })}
      <BookInfo book={book} isShown={isShown} closeBookInfo={closeBookInfo} />
    </StyledList>
  )
}

export default BooksList
