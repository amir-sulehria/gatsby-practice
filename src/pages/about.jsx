import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'


const AboutPage = () => {

    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
              node{
                frontmatter{
                  title
                  
                }fields{
                    slug
                  }
              }
            }
        }
    }
`)
    console.log(data.allMarkdownRemark.edges);



    return (
        <Layout>
            <h1 className="link">About Page</h1>
            <p>This is about page</p>
            <p>
                Need a developer <a href="/contact">Contact Me</a>
            </p>
            <p>
                Need a developer <Link to="/contact">Contact Me</Link>
            </p><a href="#">hey there</a>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}><h3>{edge.node.frontmatter.title}</h3></Link>
                        </li>);
                })}
            </ol>

        </Layout>
    )
}

export default AboutPage
