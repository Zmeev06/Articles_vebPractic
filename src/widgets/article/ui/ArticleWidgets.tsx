import React from 'react'
import style from "./ArticleWidgets.module.scss";

import ShareIcon from "shared/assets/icons/share.svg?react";
import DateIcon from "shared/assets/icons/date.svg?react";
import EyeIcon from "shared/assets/icons/eye.svg?react";
import { IconButton } from 'shared/ui/icon-button';

interface IArticleWidgetsProps {
  theme?: string,
  color?: string,
  title: string,
  subtitle: string,
  blocks: IArticleScheme[],
  date: string,
  viewCount: number,
}

export const ArticleWidgets = (props: IArticleWidgetsProps) => {
  const {
    theme = "#e4e4e4",
    color = "#333333",
    subtitle,
    title,
    blocks,
    date,
    viewCount
  } = props;

  return (
    <div style={{backgroundColor: theme}} className={style.article}>
      <div className={style.title_block}>
        <h1 className={style.title}>{title}</h1>
        <IconButton width={15} height={15} Icon={ShareIcon}/>
      </div>
      <div className={style.article_info}>
        <div className={style.date}>
          <DateIcon/>
          <div>{date}</div>
        </div>
        <div className={style.views}>
          <EyeIcon/>
          <div>{viewCount}</div>
        </div>
      </div>
      <h2 className={style.subtitle}>{subtitle}</h2>

      <div className={style.bar} style={{backgroundColor: color}}></div>

      <div>
        {blocks.map(item => item.type === "text" ? 
          (<div className={style.text}>
            <p>{item.content}</p>
          </div>) :
          (<div className={style.img}>
            <img src={item.content} alt="" />
          </div>))}
      </div>
    </div>
  )
}