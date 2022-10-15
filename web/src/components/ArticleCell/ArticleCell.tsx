import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      slug
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

interface Props
  extends CellSuccessProps<FindArticleQuery, FindArticleQueryVariables> {
  id: number
  slug: string
}

export const Success = ({ article }: Props) => {
  return <Article article={article} />
}
