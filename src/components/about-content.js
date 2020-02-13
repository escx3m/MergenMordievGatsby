import React from "react"
import styled from "styled-components"
import Container from "./container"
import PhotoMe from "../images/PhotoMe.jpg"
import { Breakpoints as bp } from "./global-styles"

const AboutBox = styled.section``

const AboutContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ". picture" "vid-img .";
  grid-gap: 3.33vw;
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-width: ${bp.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas: "." "picture" "." "vid-img";
    padding-top: 3em;
    padding-bottom: 3em;
  }
`

const AboutText = styled.div`
  h1,
  h2 {
    margin: 0;
    margin-bottom: 0.33em;
    font-family: var(--title-font);
    font-weight: 700;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
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

const AboutImg = styled.div`
  grid-area: picture;
  & > img {
    line-height: 0;
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
`

const VideoBox = styled.span`
  grid-area: vid-img;
  display: block;
`

const AboutContent = () => {
  return (
    <AboutBox>
      <AboutContainer>
        <AboutText>
          <h1>Обо мне</h1>
          <p>
            Первую платную фотосессию я провел случайно. Одна девушка увидела в
            Вконтакте мои работы и спросила, сколько будет стоить фотосессия.
            Пришлось спрашивать у других фотографов, сколько стоят их услуги. Их
            расценки мне показались высокими, и я сделал работу за полцены.
            Получилось очень даже удачно. Девушка рассказала обо мне своим
            друзьям, по этой ниточке пошли заказы. Также я ходил и
            фотографировал на вечеринках в ночных клубах, потом выкладывал фото
            в соцсетях. После этого посыпались посыпались предложения.
          </p>
          <p>
            Сейчас клиенты находят меня, посмотрев мои работы в Инстграме и
            других соцсетях, обращаются по рекомендациям друзей. Среди моих
            друзей есть и слышащие, и глухие. География рабочих поездок
            расширяется. Недавно я выезжал на съемку в Уфу.
          </p>
          <p>
            Иногда люди пугаются, когда узнают, что фотограф глухой. Я предлагаю
            таким клиентам пробную фотосессию. В итоге они остаются довольны
            результатом. С клиентами о встрече договариваемся смсками, во время
            работы общаемся жестами. «Поверните голову», «встаньте прямо» - это
            понятно и без слов. Если нужно что-то объяснить, набираю текст на
            телефоне и показываю.
          </p>
        </AboutText>
        <AboutImg>
          <img src={PhotoMe} alt="Фотография со мной" />
        </AboutImg>
        <VideoBox>
          <iframe
            title="FrameVideo"
            width="100%"
            height="480"
            style={{ border: 0 }}
            src="https://www.youtube.com/embed/mj-KOTdtet4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
          ></iframe>
        </VideoBox>
        <AboutText>
          <p>
            На свадьбах, юбилеях и в ночных клубах часто бывает такой шум, что и
            слышащие фотографы общаются жестами. Мне особенно нравится снимать в
            ночных клубах. Там особая атмосфера – много световых эффектов, люди
            более раскрепощены.
          </p>
          <p>
            В своем профиле в соцсетях я специально указываю, что я deaf
            (глухой) фотограф. Так делают многие глухие. Не слышащие ребята из
            других городов предпочитают работать со мной, потому что им трудно
            объясняться с обычным фотографом. Я даже придумал себе логотип, в
            котором жестовым языком показаны два слова – глухой и фотоаппарат.
          </p>
        </AboutText>
      </AboutContainer>
    </AboutBox>
  )
}

export default AboutContent
