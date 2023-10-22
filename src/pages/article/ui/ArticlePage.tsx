import { useParams } from 'react-router-dom'
import { ArticleWidgets } from 'widgets/article'
import { articleApi } from '@app/providers/store'
import style from './ArticlePage.module.scss'

export const ArticlePage = () => {
  const { title = '' } = useParams()
  const { data } = articleApi.useGetArticleByTitleQuery(title)
  console.log(data)
  return (
    <div className={style.page}>
      <div className={style.bg} />
      <ArticleWidgets
        title="Тест"
        subtitle="Тест"
        viewCount={123}
        date="23.34.2023"
        content="afsaf<u>afdsgdg</u>"
      />
    </div>
  )
}
