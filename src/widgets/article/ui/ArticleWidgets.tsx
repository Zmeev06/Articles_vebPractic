import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import DateIcon from 'shared/assets/icons/date.svg?react'
import EyeIcon from 'shared/assets/icons/eye.svg?react'
import ShareIcon from 'shared/assets/icons/share.svg?react'
import { Copy } from 'shared/ui/Copy'
import { IconButton } from 'shared/ui/icon-button'
import { MyModal } from 'shared/ui/my-modal'
import { Spinner } from 'shared/ui/spinner'
import { articleApi } from '@app/providers/store'
import style from './ArticleWidgets.module.scss'

interface IArticleWidgetsProps {
  theme?: string
  color?: string
  title: string
  subtitle: string
  content: string
  date: string
  viewCount: number
  normolize_title: string
}

export const ArticleWidgets = (props: IArticleWidgetsProps) => {
  const {
    theme = '#e4e4e4',
    color = '#333333',
    subtitle,
    title,
    content,
    date,
    viewCount,
    normolize_title,
  } = props

  const [isActiveModal, setIsActiveModal] = useState(false)

  const { data, isLoading } =
    articleApi.useGetArticleByTitleQuery(normolize_title)

  const link = useLocation().pathname

  return (
    <div style={{ backgroundColor: theme }} className={style.article}>
      <div className={style.title_block}>
        <h1 className={style.title}>{title}</h1>
        {isActiveModal && isLoading && (
          <MyModal
            className="link-modal"
            isActive={isActiveModal}
            setIsActive={setIsActiveModal}
            headerTitle="Поделиться статьей"
            link=""
          >
            {isLoading ? (
              <div style={{ margin: '0 auto' }}>
                <Spinner />
              </div>
            ) : (
              <>
                <p className="text-in-modal">Ссылка на статью:</p>
                <br />
                <div className="link-copy-wrap">
                  <p className="link-to-article">
                    {'http://195.2.93.178' + link}
                  </p>
                  <Copy
                    className="notificationCopy"
                    value={'http://195.2.93.178' + link}
                  />
                </div>
                <br />
                <br />
                <p className="text-in-modal">Qr-код на статью:</p>
                <div className="qr-code-wrap">
                  <img
                    src={`'http://195.2.93.178/static/qr-codes/${data.id}.png`}
                    alt="qr-code"
                  />
                </div>
              </>
            )}
          </MyModal>
        )}
        <IconButton
          className={style.share}
          width={25}
          height={25}
          Icon={ShareIcon}
          onClick={() => setIsActiveModal(true)}
        />
      </div>
      <div className={style.article_info}>
        <div className={style.date}>
          <DateIcon />
          <div>{date}</div>
        </div>
        <div className={style.views}>
          <EyeIcon />
          <div>{viewCount}</div>
        </div>
      </div>
      <h2 className={style.subtitle}>{subtitle}</h2>

      <div className={style.bar} style={{ backgroundColor: color }} />

      <div
        className={style.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
