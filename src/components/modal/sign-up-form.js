import React from "react"
import styled from "styled-components"
import Button from "../button"
import InputField from "./form/input-field"
import Checkbox from "./form/checkbox"
import Title from "./form/title"

const fields = [
  {
    id: "name",
    title: "Имя *",
    special: "Некорректный ввод",
    type: "text",
    placeholder: "Введите имя",
    required: true,
  },
  {
    id: "email",
    title: "Эл. почта *",
    special: "Некорректный ввод",
    type: "email",
    placeholder: "Введите e-mail",
    required: true,
  },
  {
    id: "phone",
    title: "Номер телефона",
    special: "Некорректный ввод",
    type: "text",
    placeholder: "+7 (___) ___-__-__",
    required: false,
  },
  {
    id: "password",
    title: "Пароль *",
    special: "Пароли не совпадают",
    type: "password",
    placeholder: "Введите пароль",
    required: true,
  },
  {
    id: "repeat-password",
    title: "Повторите пароль *",
    special: "",
    type: "password",
    placeholder: "Введите пароль ещё раз",
    required: true,
  },
]

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;

  & > *:not(:last-child) {
    margin-right: 1em;
  }
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  padding: 1em;
  font-size: 0.9em;
  font-weight: 300;
  text-align: center;
  background: var(--lighter-grey);
  border-radius: 4px;

  span {
    margin-bottom: 0.5em;
  }
`

const CheckboxText = styled.span`
  font-size: 0.9em;
`

const SignUpForm = () => {
  return (
    <form>
      <Title>Регистрация</Title>
      {fields.map(field => (
        <InputField
          key={field.id}
          inputTitle={field.title}
          special={field.special}
          inputType={field.type}
          id={field.id}
          inputPlaceholder={field.placeholder}
          isRequired={field.required}
        />
      ))}
      <Checkbox checkboxId="agreement" isRequired={true}>
        <CheckboxText>
          Я даю согласие на обработку моих персональных данных
        </CheckboxText>
      </Checkbox>
      <Controls>
        <Button text="Зарегистрироваться" buttonType="submit" />
        <Button text="Отмена" buttonType="reset" transparent />
      </Controls>
      <Footer>
        <span>Уже зарегистрированы?</span>
        <a href="#">Авторизация</a>
      </Footer>
    </form>
  )
}

export default SignUpForm
