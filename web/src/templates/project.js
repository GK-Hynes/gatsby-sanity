import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      description
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <h1>{data.sanityProject.title}</h1>
    <Image
      fluid={data.sanityProject.image.asset.fluid}
      alt={data.sanityProject.title}
    />
    <p>{data.sanityProject.description}</p>
    <Link to="/">Back to home</Link>
  </Layout>
)
