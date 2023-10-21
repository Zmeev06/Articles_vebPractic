import './styles/index.scss'
import TestIcon from 'shared/assets/icons/test.svg?react'
import { IconButton } from '../shared/ui/icon-button'
import { TextButton } from '../shared/ui/text-button'

export const App = () => {
  return (
    <>
      <IconButton
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
      </TextButton>
      <div className="root">
        <h1 className="title">Lorem ipsum dolor sit.</h1>
        <h2 className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          doloribus necessitatibus quae. Sapiente ratione, repellat porro
          recusandae perferendis nam quos repellendus nihil, sit asperiores
          iusto necessitatibus ipsa possimus illo obcaecati?
        </p>
        <div className="imgWrap">
          <img
            src="../../src/shared/assets/img/testImage.jpg"
            alt="rararara"
            className="img"
          />
        </div>
      </div>
    </>
  )
}
