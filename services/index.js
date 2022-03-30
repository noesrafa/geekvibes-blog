import { request, gql } from 'graphql-request'

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
              featuredPost
            }
          }
        }
      }
    `
    const response = await request('https://api-us-west-2.graphcms.com/v2/cl1c7mvpw2zxa01z3cczn9f0u/master', query)
    return response.postsConnection.edges;
}

export const getAuthor = async () => {
    const query = gql`
    query MyQuery {
        authorsConnection {
            edges {
              node {
                name
                photo {
                  url
                }
              }
            }
          }
      }
    `
    const response = await request('https://api-us-west-2.graphcms.com/v2/cl1c7mvpw2zxa01z3cczn9f0u/master', query)
    return response.authorsConnection.edges;
}