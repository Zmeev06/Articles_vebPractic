import React, { useState } from 'react'
import { Input } from 'shared/ui/input'
import plus from '../../shared/assets/icons/plus.svg'
import styles from './CreateArticle.module.scss'

export const CreateArticlePage = () => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubTitle] = useState('')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
      <div className={styles.articleBlock}>
        <Input
          type="title"
          placeholder="Заголовок"
          value={title}
          setValue={setTitle}
        />
        <Input
          type="title"
          placeholder="Подзаголовок"
          value={subtitle}
          setValue={setSubTitle}
        />
      </div>
    </div>
  )
}
