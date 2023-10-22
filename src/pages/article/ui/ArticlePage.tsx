import { useLocation, useParams } from 'react-router-dom'
import { ArticleWidgets } from 'widgets/article'
import { articleApi } from '@app/providers/store'
import style from './ArticlePage.module.scss'

const ArticlePage = () => {
  const location = useLocation()
  const title = location.pathname.split('/')[2]
  const { data } = articleApi.useGetArticleByTitleQuery(title)
  return (
    <div className={style.page}>
      <div className={style.bg} />
      <ArticleWidgets
        normolize_title={title}
        title={data?.title || ''}
        subtitle={data?.subtitle || ''}
        viewCount={data?.times_visited || 1}
        date={data?.created_at || ''}
        content={data?.content || ''}
      />
    </div>
  )
}

export default ArticlePage
