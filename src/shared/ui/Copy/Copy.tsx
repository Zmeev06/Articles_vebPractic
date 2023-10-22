import './Copy.scss'
import { toast } from 'react-toastify'
import CopyIcon from '../../assets/icons/copy.svg?react'

const messageCopySuccess = 'Копирование прошло успешно'
const messageCopyError = 'При копировании возникла ошибка'

interface CopyProps {
  className?: string
  value: string
}

export const Copy = ({ className, value }: CopyProps) => {
  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    }
    return document.execCommand('copy', true, text)
  }

  return (
    <CopyIcon
      className={`iconCopy ${className}`}
      onClick={() => {
        copyTextToClipboard(value)
          .catch((error) => toast.error(messageCopyError))
          .then(() => toast.success(messageCopySuccess))
          .catch(() => 'obligatory catch')
      }}
    />
  )
}
