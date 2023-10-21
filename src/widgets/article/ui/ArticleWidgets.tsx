import React from 'react'
import style from "./ArticleWidgets.module.scss";

interface IArticleWidgetsProps {
  theme?: string,
  title: string,
  subtitle: string,
  blocks: IArticleScheme[],
}

export const ArticleWidgets = (props: IArticleWidgetsProps) => {
  const {
    theme = "#e4e4e4",
    subtitle,
    title,
    blocks
  } = props;

  return (
    <div style={{backgroundColor: theme}} className={style.article}>
      <h1 className={style.title}>{title}</h1>
      <h2 className={style.subtitle}>{subtitle}</h2>

      <div>
        {blocks.map(item => item.type === "text" ? 
          (<div className={style.text}>
            {item.content}
          </div>) :
          (<div className={style.img}>
            <img src={item.content} alt="" />
          </div>))}
      </div>
    </div>
  )
}