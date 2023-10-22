import { useParams } from 'react-router-dom'
import { ArticleWidgets } from 'widgets/article'
import style from './ArticlePage.module.scss'
import { articleApi } from '@app/providers/store'

const ArticlePage = () => {
  const { title = '' } = useParams()
  const { data } = articleApi.useGetArticleByTitleQuery(title)
  console.log(data)
  return (
    <div className={style.page}>
      <div className={style.bg}></div>
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

export default ArticlePage
