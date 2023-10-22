import 'react-quill/dist/quill.snow.css'
import React, { useState } from 'react'
import styles from './CreateArticle.module.scss'
import { FormArticle } from 'features/form-article';

const CreateArticlePage = () => {
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
        {selectedImage && (
          <img src={selectedImage} alt="Selected" className={styles.bgImg} />
        )}
      </div>
      <FormArticle onChangeImageCover={handleImageChange}/>
    </div>
  )
}

export default CreateArticlePage
