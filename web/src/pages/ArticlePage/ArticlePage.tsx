import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

interface Props {
  slug: string
  id: number
}

const ArticlePage = ({ slug, id }: Props) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={parseInt(id)} slug={slug} />
    </>
  )
}

export default ArticlePage
