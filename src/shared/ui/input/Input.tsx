import classNames from 'classnames'
import style from './Input.module.scss'

interface InputProps {
  placeholder?: string
  type: 'title' | 'subtitle'
  className?: string
  value: string
  setValue: (value: string) => void
}

export const Input = ({
  placeholder = 'Some text',
  type = 'title',
  className,
  value,
  setValue,
}: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className={classNames(style.input, className)}
      style={{
        minWidth: type === 'title' ? 300 : 150,
        fontSize: type === 'title' ? 50 : 30,
      }}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
