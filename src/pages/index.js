import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>What is a molecule?</h1>
    <p>A molecule is a particule that contains hundres of thousands of information and genetics. In it's own course</p>
    <p>Non any different than a "Software" this latter responsible for manipulating sometimes hundres and somes no lines of codes coming on input by a magic so called "Programmer"</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
