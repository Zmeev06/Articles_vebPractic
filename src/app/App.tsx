import './styles/index.scss'
import ArticlePage from 'page/article/ArticlePage'
import TestIcon from 'shared/assets/icons/test.svg?react'
import { IconButton } from '../shared/ui/icon-button'
import { TextButton } from '../shared/ui/text-button'

export const App = () => {
  return (
    <>
      {/* <IconButton
        bgColor="#000000"
        onClick={() => console.log('ывпывпывп')}
        Icon={TestIcon}
      />
      <TextButton color="#ffffff" bgColor="#000000" styled="filled">
        -10см хую серёжи
      </TextButton>
      <TextButton
        width="500px"
        padding="20px"
        color="#333333"
        bgColor="#000000"
        styled="outline"
      >
        -20см хую серёжи
      </TextButton> */}
      <ArticlePage />
    </>
  )
}
