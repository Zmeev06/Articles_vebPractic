import classNames from 'classnames'
import React, { useState } from 'react'
import style from './IconButton.module.scss'

interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  className?: string
  width?: number,
  height?: number,
  bgColor?: string
}
export const IconButton = (props: IIconButtonProps) => {
  const {
    Icon,
    className,
    width = 30,
    height = 30,
    bgColor = '#c4c4c4',
    ...otherProps
  } = props

  const [isHover, setIsHover] = useState(false)

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        backgroundColor: !isHover ? bgColor : `${bgColor}80`,
        height: width,
      }}
      className={classNames(style.btn, className)}
      {...otherProps}
    >
      <Icon width={`${width - 10}px`} className={className} />
    </button>
  )
}
