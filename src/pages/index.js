import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import Catalog from "../components/catalog"

const IndexPage = () => (
  <Layout>
    <SEO title="Мерген Мордиев" />
    <Carousel />
    {/* <Catalog /> */}
  </Layout>
)

export default IndexPage
