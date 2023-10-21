import style from "./ArticlePage.module.scss";
import {ArticleWidgets} from 'widgets/article'

const ArticlePage = () => {
  return (
    <div className={style.page}>
      <div className={style.bg}>
        <ArticleWidgets title="Тест" subtitle="Тест" viewCount={123} date="23.34.2023" content="afsaf<u>afdsgdg</u>"/>
      </div>
    </div>
  )
}

export default ArticlePage;
