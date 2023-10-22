import 'react-quill/dist/quill.snow.css'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import DeleteIcon from 'shared/assets/icons/delete.svg?react'
import Moon from 'shared/assets/icons/moon.svg?react'
import plus from 'shared/assets/icons/plus.svg'
import Sun from 'shared/assets/icons/sunIcon.svg?react'
import { Copy } from 'shared/ui/Copy'
import { IconButton } from 'shared/ui/icon-button'
import { Input } from 'shared/ui/input'
import { Modal } from 'shared/ui/modal'
import { MyModal } from 'shared/ui/my-modal'
import { Spinner } from 'shared/ui/spinner'
import { TextButton } from 'shared/ui/text-button'
import { articleApi } from '@app/providers/store'
import styles from './CreateArticle.module.scss'

const CreateArticlePage = () => {
  const [createArticleFunc, { data, isLoading }] =
    articleApi.useCreateArticleMutation()
  const [title, setTitle] = useState('')
  const [subtitle, setSubTitle] = useState('')
  const [text, setText] = useState('')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isSubtitle, setIsSubTitle] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [isActiveModal, setIsActiveModal] = useState(false)
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.addEventListener('load', (e) => {
        setSelectedImage(e.target?.result as string)
      })
      reader.readAsDataURL(file)
    } else {
      setSelectedImage(null)
    }
  }

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

  const createArticleHandler = () => {
    if (!text && !title) return

    createArticleFunc({
      content: text,
      title,
      subtitle,
      theme,
    })

    setText('')
    setSubTitle('')
    setTitle('')

    setIsActiveModal(true)
  }

  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        <label htmlFor="input" className={styles.inputLabel}>
          <img src={plus} alt="" className={styles.icon} />
          <input
            id="input"
            type="file"
            accept="image/*"
            className={styles.fileInput}
            onChange={handleImageChange}
          />
        </label>

        {selectedImage && (
          <img src={selectedImage} alt="Selected" className={styles.bgImg} />
        )}
      </div>
      <div
        className={classNames(
          styles.articleBlock,
          theme === 'light'
            ? styles.light
            : theme === 'dark'
            ? styles.dark
            : styles.paper,
        )}
      >
        <div className={styles.titlesBlock}>
          <Input
            type="title"
            placeholder="Заголовок"
            value={title}
            setValue={setTitle}
            color={theme === 'dark' ? '#a9a9a9' : '#000'}
          />
          <div className={styles.themedBlock}>
            <div className={styles.subtitleBlock}>
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
                  className={styles.addSubtitle}
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
              styles.editorBlock,
              theme === 'dark' ? styles.editorBlockLight : '',
            )}
          >
            <div className={styles.textEdit}>
              <ReactQuill
                value={text}
                onChange={setText}
                theme="snow"
                modules={modules}
                formats={formats}
                className={classNames(styles.editor)}
              />
            </div>
          </div>
        </div>

        {isActiveModal && (
          <MyModal
            className="link-modal"
            isActive={isActiveModal}
            setIsActive={setIsActiveModal}
            headerTitle="Поделиться статьей"
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
                    {(data && data.link) || 'eoifihewj'}
                  </p>
                  {data && (
                    <Copy className="notificationCopy" value={data.link} />
                  )}
                </div>
                <br />
                <br />
                <p className="text-in-modal">Qr-код на статью:</p>
                <div className="qr-code-wrap">
                  <img src={data?.qr_code && data.qr_code} alt="qr-code" />
                </div>
              </>
            )}
          </MyModal>
        )}

        <TextButton
          onClick={createArticleHandler}
          styled="filled"
          bgColor="#2A00B4"
          className={styles.btn}
        >
          Сохранить
        </TextButton>
      </div>
    </div>
  )
}

export default CreateArticlePage
