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
import { FormArticle } from 'features/form-article';

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
      <FormArticle onChangeImageCover={handleImageChange}/>
    </div>
  )
}

export default CreateArticlePage
