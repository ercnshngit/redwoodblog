export const schema = gql`
  type Post {
    id: Int!
    title: String!
    slug: String!
    body: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    slug: String!
    body: String!
    deletedAt: DateTime
  }

  input UpdatePostInput {
    title: String
    slug: String
    body: String
    deletedAt: DateTime
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
