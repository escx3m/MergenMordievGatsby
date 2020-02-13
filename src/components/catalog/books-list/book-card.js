import React from "react"
import styled from "styled-components"
import StatusControl from "./book-card/status-control"
import { Breakpoints as bp } from "../../global-styles"

const ImageBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 300px;
  max-height: 300px;
  box-sizing: border-box;
  transition: margin 0.25s;
  cursor: pointer;
`

const Image = styled.img`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  border-radius: 1em;
  box-shadow: 0 8px 4px -4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.25s;
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`

const AvailableStatus = styled.strong`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  color: var(--white);
  font-size: 0.8em;
  font-weight: 400;
  line-height: 100%;
  text-align: center;
  background: ${props =>
    props.isAvailable ? "var(--accent)" : "var(--error)"};
  border-radius: 1em;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: border-box;
`

const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 1em;
  font-size: 0.8em;
  line-height: 110%;

  @media (max-width: ${bp.mobile}) {
    margin-bottom: 0.5em;
  }
`

const Author = styled.span`
  display: block;
  margin: 1em 0 0.25em;
  color: var(--soft-grey);
  font-weight: 400;
`

const TitleName = styled.p`
  margin: 0;
  font-weight: 500;
`

const BookCard = ({
  isDisabled = false,
  book,
  tags,
  showBookInfo,
  isAdmin,
  toggleBookAvailability,
}) => {
  const { author, title, cover_img_url, isAvailable } = book

  return (
    <Card>
      <ImageBox onClick={() => showBookInfo({ ...book, tags })}>
        <Image src={cover_img_url} alt="" />
        {!isAdmin && (
          <AvailableStatus isAvailable={isAvailable}>
            {isAvailable ? "В наличии" : "На руках"}
          </AvailableStatus>
        )}
      </ImageBox>
      <CardContent>
        <CardTitle>
          <Author>{author}</Author>
          <TitleName>{title}</TitleName>
        </CardTitle>
      </CardContent>
      {isAdmin && (
        <StatusControl
          book={book}
          isChecked={isAvailable}
          toggleBookAvailability={() => toggleBookAvailability(book.id)}
        />
      )}
    </Card>
  )
}

export default BookCard
