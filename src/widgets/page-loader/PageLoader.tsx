import { Spinner } from 'shared/ui/spinner'
import style from './PageLoader.module.scss'

export const PageLoader = () => {
  return (
    <div className={style.container}>
      <Spinner size="100px" />
    </div>
  )
}
