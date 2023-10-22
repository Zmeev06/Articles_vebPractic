import React, { useState } from 'react'
import styles from './style.module.scss'
import { Input } from 'shared/ui/input'

export const CreateArticleBlock = ({}) => {
  const [title, setTitle] = useState('')
  return (
    <div>
      <Input value={title} type="title" setValue={setTitle} />
    </div>
  )
}
