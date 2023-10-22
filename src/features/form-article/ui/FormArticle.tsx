import classNames from 'classnames'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import DeleteIcon from 'shared/assets/icons/delete.svg?react'
import Moon from 'shared/assets/icons/moon.svg?react'
import Sun from 'shared/assets/icons/sunIcon.svg?react'
import UploadImageIcon from 'shared/assets/icons/uploadImage.svg'
import { IconButton } from 'shared/ui/icon-button'
import { Input } from 'shared/ui/input'
import { TextButton } from 'shared/ui/text-button'
import { articleApi } from '@app/providers/store'
import style from './FormArticle.module.scss'

interface IFormArticleProps {
  onChangeImageCover: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormArticle = (props: IFormArticleProps) => {
  const { onChangeImageCover } = props

  const [createArticleFunc] = articleApi.useCreateArticleMutation()

  const [title, setTitle] = useState('')
  const [subtitle, setSubTitle] = useState('')
  const [text, setText] = useState('')
  const [isSubtitle, setIsSubTitle] = useState(false)
  const [theme, setTheme] = useState('light')

  const modules = {
    toolbar: [
      [{ header: '2' }],
      ['bold', 'italic'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'link'],
      ['image'],
    ],
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'list',
    'bullet',
    'blockquote',
    'link',
    'image',
  ]

  const createArticleHandler = () =>
    createArticleFunc({
      content: text,
      subtitle,
      theme,
      title,
    })

  return (
    <div
      className={classNames(
        style.articleBlock,
        theme === 'light'
          ? style.light
          : // eslint-disable-next-line prettier/prettier, unicorn/no-nested-ternary
          theme === 'dark'
          ? style.dark
          : style.paper,
      )}
    >
      <div className={style.article_inner}>
        <div className={style.titlesBlock}>
          <Input
            type="title"
            placeholder="Заголовок"
            value={title}
            setValue={setTitle}
            color={theme === 'dark' ? '#a9a9a9' : '#000'}
            className={style.input_title}
          />
          <label htmlFor="input" className={style.inputLabel}>
            <img src={UploadImageIcon} alt="" className={style.icon} />
            <input
              id="input"
              type="file"
              accept="image/*"
              className={style.fileInput}
              onChange={onChangeImageCover}
            />
          </label>
        </div>

        <div className={style.themedBlock}>
          <div className={style.subtitleBlock}>
            {isSubtitle ? (
              <>
                <Input
                  type="subtitle"
                  placeholder="Подзаголовок"
                  value={subtitle}
                  setValue={setSubTitle}
                  color={theme === 'dark' ? '#a9a9a9' : '#000'}
                />
                <IconButton
                  Icon={DeleteIcon}
                  width={30}
                  onClick={() => setIsSubTitle(false)}
                />
              </>
            ) : (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <p
                onClick={() => setIsSubTitle(true)}
                className={style.addSubtitle}
              >
                Добавить подзаголовок
              </p>
            )}
          </div>
          <IconButton
            Icon={theme === 'dark' ? Sun : Moon}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
        </div>
        <div
          className={classNames(
            style.editorBlock,
            theme === 'dark' ? style.editorBlockLight : '',
          )}
        >
          <div className={style.textEdit}>
            <ReactQuill
              value={text}
              onChange={setText}
              theme="snow"
              modules={modules}
              formats={formats}
              className={classNames(style.editor)}
            />
          </div>
        </div>
        <div className={style.button_block}>
          <TextButton
            onClick={createArticleHandler}
            styled="filled"
            bgColor="#2A00B4"
            className={style.btn}
          >
            Сохранить
          </TextButton>
        </div>
      </div>
    </div>
  )
}
