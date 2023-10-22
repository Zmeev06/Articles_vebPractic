import classNames from 'classnames'
import React, { useState } from 'react'
import style from './TextButton.module.scss'

interface ITextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  styled?: 'filled' | 'outline'
  bgColor?: string
  color?: string
  hoverColor?: string
  width?: string
  padding?: string
}

export const TextButton = (props: ITextButtonProps) => {
  const {
    children,
    styled = 'filled',
    bgColor = '#e4e4e4',
    color = '#ffffff',
    hoverColor = '#ffffff',
    className,
    width = '150px',
    padding = '5px',
    ...otherProps
  } = props

  const [isHover, setIsHover] = useState(false)

  return (
    <div style={{ width }} className={className}>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={
          styled === 'filled'
            ? !isHover
              ? { backgroundColor: bgColor, color, padding }
              : {
                  backgroundColor: `${bgColor}80`,
                  color: hoverColor,
                  padding,
                }
            : !isHover
            ? { border: `1px solid ${bgColor}`, color, padding }
            : {
                backgroundColor: `${bgColor}80`,
                color: hoverColor,
                padding,
              }
        }
        className={classNames(style.btn, className)}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  )
}
