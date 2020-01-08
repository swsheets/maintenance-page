import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>SWSheets is currently undergoing maintenance.</h1>
    <p>
      We expect to be complete by{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.worldtimebuddy.com/?pl=1&amp;lid=7&amp;h=7&amp;date=1/18/2020%7C3"
      >
        01/18/2020 8:00AM MST
      </a>
      .
    </p>
    <hr></hr>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
