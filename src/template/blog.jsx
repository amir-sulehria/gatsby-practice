import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export const query = graphql`
query($slug: String!){
    markdownRemark(fields:{slug:{eq:$slug}}){
        frontmatter{
            title
        }
        html
    }
}
`

export default function Blog(props) {


    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            this is blog template
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} ></div>

        </Layout>
    )
}
