import 'react-quill/dist/quill.snow.css'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { IconButton } from 'shared/ui/icon-button'
import { Input } from 'shared/ui/input'
import { TextButton } from 'shared/ui/text-button'
import DeleteIcon from '../../shared/assets/icons/delete.svg?react'
import Moon from '../../shared/assets/icons/moon.svg?react'
import plus from '../../shared/assets/icons/plus.svg'
import Sun from '../../shared/assets/icons/sunIcon.svg?react'
import styles from './CreateArticle.module.scss'

export const CreateArticlePage = () => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubTitle] = useState('')
  const [text, setText] = useState('')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isSubtitle, setIsSubTitle] = useState(false)
  const [theme, setTheme] = useState('dark')

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

  useEffect(() => {
    console.log(text)
  }, [text])
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
            {isSubtitle ? (
              <div className={styles.subtitleBlock}>
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
              </div>
            ) : (
              <div className={styles.subtitleBlock}>
                <p
                  onClick={() => setIsSubTitle(true)}
                  className={styles.addSubtitle}
                >
                  Добавить подзаголовок
                </p>
              </div>
            )}
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
        <TextButton styled="filled" bgColor="#2A00B4" className={styles.btn}>
          Сохранить
        </TextButton>
      </div>
    </div>
  )
}
