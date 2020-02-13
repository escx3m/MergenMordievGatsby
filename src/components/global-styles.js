import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --font: "Fira Sans", "Arial", sans-serif;
    --title-font: "Montserrat", "Arial", sans-serif;

    --black: #000000;
    --white: #ffffff;
    --accent: #197c08;
    --accent-light: #22a40c;
    --error: #bf2929;
    --error-light: #ff0000;
    --light-yellow: #fff2c5;
    --light-blue: #e5eaff;
    --dark-grey: #525252;
    --soft-grey: #8B8B8B;
    --grey: #959595;
    --light-grey: #e5e5e5;
    --lighter-grey: #f4f4f4;
    --lightest-grey: #f9f9f9;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
    color: var(--black);
    font-family: var(--font);
    font-size: 16px;
    font-weight: 400;
    background-color: var(--white);
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: var(--black);
    text-decoration: none;

    &[href] {
      color: var(--black);

      &:hover:not(:active) {
        text-decoration: underline;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  input,
  textarea {
    appearance: none;
  }

  .visually-hidden:not(:focus):not(:active),
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden,
  .account-page__dropzone input[type="file"],
  .rating input[type="radio"] {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
  }

  #gatsby-focus-wrapper {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    width: 100%;
    min-height: 100vh;
  }
`

export const Breakpoints = {
  desktop: "1366px",
  tablet: "1024px",
  mobile: "767px",
}

export default GlobalStyles
