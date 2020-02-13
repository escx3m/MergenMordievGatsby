import React from "react"
import styled from "styled-components"
import { Breakpoints as bp } from "../global-styles"

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  display: ${props => (props.isShown ? "" : "none")};
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
`

const ModalBox = styled.div`
  display: block;
  width: 100%;
  padding: 5vh 5vw 10vh;
`

const Window = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 32px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 67px 32px 40px;
  background: var(--white);
  border-radius: 16px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: ${bp.mobile}) {
    grid-template-columns: 1fr;
    padding: 64px 16px 16px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 32px;
  padding: 0;
  padding-left: 24px;
  color: var(--accent);
  background: 0;
  border: 0;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 1em;
    height: 1px;
    background: currentColor;
  }

  &::before {
    transform: translateY(-50%) rotate(45deg);
  }

  &::after {
    transform: translateY(-50%) rotate(-45deg);
  }

  &:hover:not(:active),
  &:focus {
    color: var(--accent-light);
    outline: 0;
  }

  @media (max-width: ${bp.mobile}) {
    top: 16px;
    right: 16px;
  }
`

const ImageBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 220px;
  overflow: hidden;
  border-radius: 1em;
  box-shadow: 0 8px 4px -4px rgba(0, 0, 0, 0.2);

  img {
    width: 220px;
    height: 330px;
    object-fit: cover;
  }
`

// const ActionButton = styled.button`
//   width: 100%;
//   padding: 12px 24px;
//   color: var(--white);
//   background: var(--accent-light);
//   border: 0;
//   border-radius: 12px;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover:not(:active) {
//     background: var(--accent);
//   }
// `

const Title = styled.h2`
  display: block;
  width: 100%;
  max-width: 75%;
  margin: 0;
  margin-bottom: 0.5em;
  font-size: 1.5em;
  font-weight: 700;

  @media (max-width: ${bp.mobile}) {
    max-width: 100%;
  }
`

// delete this comment
const Author = styled.span`
  color: var(--soft-grey);
`

const Section = styled.div`
  &:not(:last-child) {
    margin-bottom: 2em;
  }

  h3 {
    font-size: 1.125em;
  }

  p {
    margin: 1em 0;
    line-height: 130%;
  }
`

const ListReset = styled.ul`
  list-style: none;
  margin: 1em 0;
  padding: 0;
`

const GridList = styled(ListReset)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
`

const TagList = styled(ListReset)`
  display: flex;
  flex-wrap: wrap;

  li {
    &:not(:last-child) {
      margin-right: 1em;
    }
  }

  a[href] {
    display: inline-block;
    padding: 0.125em 0.5em;
    color: var(--accent);
    text-transform: lowercase;
    border: 1px solid currentColor;
    border-radius: 0.5em;
    /* Временное отключение кликабельности тегов */
    pointer-events: none;

    &:hover {
      color: var(--accent-light);
      text-decoration: none;
    }
  }
`

const AvailableStatus = styled.strong`
  && {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    color: var(--white);
    font-size: 0.8em;
    font-weight: 400;
    text-align: center;
    background-color: ${props =>
      props.isAvailable ? "var(--accent)" : "var(--error)"};

    svg {
      fill: currentColor;
      margin-right: 0.5em;
    }

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const BookInfo = ({ book, isShown, closeBookInfo }) => {
  const {
    author,
    title,
    description,
    cover_img_url,
    isAvailable,
    isbn,
    tags,
  } = book
  return (
    <Overlay isShown={isShown}>
      <ModalBox onClick={evt => closeBookInfo(evt)}>
        <Window>
          <CloseButton type="button" onClick={evt => closeBookInfo(evt)}>
            Закрыть
          </CloseButton>
          <Aside>
            <ImageBox>
              <img src={cover_img_url} alt="Обложка книги" />
              <AvailableStatus isAvailable={isAvailable}>
                {isAvailable ? "В наличии" : "На руках"}
              </AvailableStatus>
            </ImageBox>
            {/* <div>
              <ActionButton type="button">Забронировать</ActionButton>
            </div> */}
          </Aside>
          <div>
            <Section as="header">
              <Title>{title}</Title>
              <Author>{author}</Author>
            </Section>
            <Section>
              <h3>О книге</h3>
              <p>{description}</p>
            </Section>
            <Section>
              <h3>Подробная информация</h3>
              <GridList>
                {/* <li>Переводчик: В. Царев</li> */}
                {/* <li>Дата написания: 2016</li> */}
                {/* <li>Год издания: 2016</li> */}
                {/* <li>Издательство: Эксмо</li> */}
                {isbn && <li>ISBN (EAN): {isbn}</li>}
                {/* <li>Дата поступления: 15 августа 2018</li> */}
                {/* <li>Объем: 824.4 тыс. знаков</li> */}
              </GridList>
            </Section>
            <Section>
              <h3>Категории</h3>
              <TagList>
                {tags &&
                  tags.map(item => {
                    return (
                      <li key={item.tagId}>
                        <a href="#" onClick={e => e.preventDefault()}>
                          {item.tagTitle}
                        </a>
                      </li>
                    )
                  })}
              </TagList>
            </Section>
          </div>
        </Window>
      </ModalBox>
    </Overlay>
  )
}

export default BookInfo
