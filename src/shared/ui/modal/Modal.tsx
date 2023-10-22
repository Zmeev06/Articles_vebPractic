import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import style from './Modal.module.scss'

interface IModalProps {
  children: React.ReactNode
  className?: string
  bgColor?: string
  open: boolean
  onClosed: () => void
  width?: string
  padding?: string
}

export const Modal = (props: IModalProps) => {
  const {
    children,
    className,
    bgColor = '#ffffff',
    onClosed,
    open,
    padding = '5px',
    width = 'fit-content',
  } = props

  const [closedAnim, setClosedAnim] = useState(false)

  const onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      onClosed()
    }
  }

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const closedHandle = () => {
    setClosedAnim(true)
    setTimeout(() => {
      onClosed()
    }, 300)
    setClosedAnim(false)
  }

  const handleClickContext = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }

  const mods = { [style.open]: open, [style.closed]: closedAnim }

  return (
    <div className={classNames(style.container, mods)} onClick={closedHandle}>
      <div
        onClick={handleClickContext}
        style={{ backgroundColor: bgColor, padding, width }}
        className={classNames(style.modal, className)}
      >
        {children}
      </div>
    </div>
  )
}
