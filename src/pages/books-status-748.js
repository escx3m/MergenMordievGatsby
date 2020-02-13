import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Catalog from "../components/catalog"

const IndexPage = () => (
  <Layout>
    <SEO title="Управление статусом книг" />
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
    <Catalog isAdmin={true} />
  </Layout>
)

export default IndexPage
