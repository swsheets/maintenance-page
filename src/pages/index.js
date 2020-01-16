import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>SWSheets is currently undergoing maintenance.</h1>
    <p>
      Maintenance began at{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.worldtimebuddy.com/?pl=1&amp;lid=7&amp;h=7&amp;date=1/22/2020%7C3"
      >
        01/22/2020 8:00PM MST
      </a>{" "}
      and we hope to be complete soon.
    </p>
    <p>May the Force be with us.</p>
    <hr></hr>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
