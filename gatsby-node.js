/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md'); //write extension if u want to remove it else leave it

        console.log(JSON.stringify(slug, undefined, 4));
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }


    // Transform the new node here and create a new node or
    // create a new node field.
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    //after this we need to do 3 things
    //1. get path to template
    const blogTemplate = path.resolve('./src/template/blog.jsx')
    //2. get markdown data
    //this graphql is not same as we used before, it's functionthat take query as arg
    const res = await graphql(`
    query{
        allMarkdownRemark{
            edges{
                node{
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `)
    //3. create new pages
    //now call createPage on data fetched from res
    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: { slug: edge.node.fields.slug }
        })
    });

}