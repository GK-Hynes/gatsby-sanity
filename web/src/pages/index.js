import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>My Portfolio</h1>
    <ul style={{ listStyle: `none` }}>
      {data.allSanityProject.edges.map(({ node: project }) => (
        <li key={project.slug.current}>
          <h2>{project.title}</h2>
          <Image fluid={project.image.asset.fluid} alt={project.title} />
          <p>{project.description}</p>
          {/* TODO add local link */}
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
