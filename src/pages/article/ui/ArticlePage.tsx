import style from "./ArticlePage.module.scss";
import {ArticleWidgets} from 'widgets/article'

const testArticle: IArticleScheme[] = [
  {
    type: "text",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ex aut debitis repudiandae laudantium sed dicta distinctio rem magnam iure quisquam velit, aliquid voluptatibus totam iusto natus aperiam temporibus sapiente",
  },
  {
    type: "text",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ex aut debitis repudiandae laudantium sed dicta distinctio rem magnam iure quisquam velit, aliquid voluptatibus totam iusto natus aperiam temporibus sapiente",
  },
  {
    type: "image",
    content: "https://w.forfun.com/fetch/25/2529ce3d3391789f369c4ec9a07a1b82.jpeg",
  },
  {
    type: "text",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ex aut debitis repudiandae laudantium sed dicta distinctio rem magnam iure quisquam velit, aliquid voluptatibus totam iusto natus aperiam temporibus sapiente",
  }

]

const ArticlePage = () => {
  return (
    <div className={style.page}>
      <ArticleWidgets viewCount={123} date="23.34.2023" blocks={testArticle} title="Тайтл самого лучшего поста" subtitle="Субтайтл самого лучшего поста"/>
    </div>
  )
}

export default ArticlePage;
