import classNames from 'classnames'
import style from './Input.module.scss'

interface InputProps {
  placeholder?: string
  type: 'title' | 'subtitle'
  className?: string
  value: string
  setValue: (value: string) => void
  color?: string
}

export const Input = ({
  placeholder = 'Some text',
  type = 'title',
  className,
  value,
  setValue,
  color,
}: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className={classNames(style.input, className)}
      style={{
        width: type === 'title' ? '100%' : '60%',
        fontSize: type === 'title' ? 45 : 30,
        color,
      }}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
