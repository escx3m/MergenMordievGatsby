import React from "react"
import styled from "styled-components"
import Container from "./container"
import { Breakpoints as bp } from "./global-styles"

const TermsContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-width: ${bp.tablet}) {
    padding-top: 3em;
    padding-bottom: 3em;
  }
`

const Section = styled.section`
  h2 {
    margin: 0;
    margin-bottom: 0.33em;
    font-family: var(--title-font);
    font-weight: 700;
  }

  h2 {
    font-size: 2em;
  }

  p {
    margin: 1em 0;
    line-height: 150%;
  }

  @media (max-width: ${bp.tablet}) {
    h2 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 1.5em;
    }

    p {
      font-size: 0.9em;
    }
  }
`

const ListReset = styled.ul`
  list-style: none;
  margin: 3em 0;
  padding: 0;
`

const PricingList = styled(ListReset)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  justify-content: center;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3em;
    background: var(--lighter-grey);
    border-bottom: 4px solid var(--light-grey);

    b {
      position: absolute;
      top: 0.5em;
      right: 1em;
      color: var(--error);
      font-weight: 500;
    }

    strong {
      margin-bottom: 0.3em;
      color: var(--accent);
      font-family: var(--title-font);
      font-size: 1.9em;
      font-weight: 600;
    }

    small {
      margin-bottom: 1.5em;
      color: var(--grey);
      font-size: 1em;
      letter-spacing: 0.05em;
    }
  }
`

const PriceTag = styled.p`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-family: var(--title-font);
    font-size: 1.5em;
    letter-spacing: 0.05em;

    & > *:not(:first-child) {
      margin-bottom: 1em;
    }

    s {
      color: var(--soft-grey);
      font-size: 0.8em;
    }
  }
`

const List = styled(ListReset)`
  margin: 1.5em 0;

  li {
    position: relative;
    display: block;
    padding-left: 1.5em;
    line-height: 130%;

    &:not(:last-child) {
      margin-bottom: 0.5em;
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "—";
      display: inline-block;
      margin-right: 0.5em;
    }
  }

  strong {
    font-weight: 500;
  }
`

const PriceContent = () => {
  return (
    <TermsContainer>
      <h1 className="visually-hidden">Тарифы и условия</h1>
      <Section>
        <Container>
          <h2>Тарифы</h2>
          <p>asdasdasdasdasdasdaskdjasjdaksjdlkasjdkjaskldjk</p>
        </Container>
      </Section>
      {/* <Section>
        <Container>
          <h2>Условия пользования</h2>
          <List>
            <li>
              На руках у каждого читателя может находиться{" "}
              <strong>не более одной</strong>
              книги
            </li>
            <li>
              Максимальный срок аренды &mdash; <strong>14 дней</strong>
            </li>
            <li>
              Штраф: <strong>100 рублей</strong> за каждый день просрочки
            </li>
            <li>
              За порчу или утрату книги читатель обязан{" "}
              <strong>возместить</strong> библиотеке её стоимость
            </li>
          </List>
        </Container>
      </Section>{" "}
      <Section>
        <Container>
          <h2>Вопрос - Ответ</h2>
          <h3>Как найти книгу?</h3>
          <p>
            Каталог книг на нашем сайте имеет удобную фильтрацию книг по их
            тематике. Для каждой книги отображается её статус в библиотеке
            &mdash; "в наличии" или "на руках". В будущем функционал каталога
            будет улучшаться и дополняться, чтобы сделать процесс подбора книг
            еще более комфортным.
          </p>
          <h3>Как арендовать книгу?</h3>
          <ul>
            <li>Выбери книгу на сайте</li>
            <li>
              Напиши в{" "}
              <a
                href="https://www.instagram.com/business_book_elista/"
                target="_blank"
                rel="noopener noreferrer"
              >
                директ инстаграм
              </a>{" "}
              или{" "}
              <a
                href="mailto:book.elista@gmail.com?subject=Бизнес библиотека Элиста"
                target="_blank"
                rel="noopener noreferrer"
              >
                на почту
              </a>
            </li>
            <li>
              Приходи за книгой в коворкинг{" "}
              <a
                href="https://yandex.ru/maps/-/CGtpfW6k"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community Park
              </a>{" "}
              в течении суток
            </li>
          </ul>
          <h3>Как оплатить подписку?</h3>
          <p>
            Оплатить подписку вы можете мобильным банком по номеру телефона{" "}
            <a href="tel:+79374646007">+7 214124124</a>. 124124124
          </p>
        </Container> */}
      {/* </Section> */}
    </TermsContainer>
  )
}

export default PriceContent
