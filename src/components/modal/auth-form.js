import React from "react"
import styled from "styled-components"
import Button from "../button"
import Title from "./form/title"
import InputField from "./form/input-field"
import Controls from "./form/controls"
import Footer from "./form/footer"

const fields = [
  {
    id: "login",
    title: "E-mail",
    special: "Неверный логин или пароль",
    type: "text",
    placeholder: "Введите адрес эл. почты",
    required: true,
  },
  {
    id: "login-password",
    title: "Пароль",
    special: "",
    type: "password",
    placeholder: "Введите пароль",
    required: true,
  },
]

const AuthForm = () => {
  return (
    <form>
      <Title>Авторизация</Title>
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
      <Controls>
        <Button text="Войти" buttonType="submit" />
        <Button text="Отмена" buttonType="reset" transparent />
      </Controls>
      <Footer>
        <span>Ещё не зарегистрированы?</span>
        <a href="#">Регистрация</a>
      </Footer>
    </form>
  )
}

export default AuthForm
