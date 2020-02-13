import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "./normalize.css"
import GlobalStyles from "./global-styles"
import Header from "./header"
import Footer from "./footer"
// import favicon from "../../public/icons/favicon.ico"
// import Modal from "./modal"
// import SignUpForm from "./modal/sign-up-form"
// import AuthForm from "./modal/auth-form"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        {/* <link rel="icon" href={favicon} /> */}
      </Helmet>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      {/* <main>sdsd</main> */}
      {/* <Footer /> */}
      {/* <Modal isShown={false}>
        <SignUpForm />
        <AuthForm />
      </Modal> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
