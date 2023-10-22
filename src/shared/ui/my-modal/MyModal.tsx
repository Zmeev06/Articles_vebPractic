import './MyModal.scss'
import CloseIcon from '../../assets/icons/CloseIcon.svg?react'

interface ModalProps {
  isActive?: boolean
  setIsActive: (param: boolean) => void
  headerTitle: string
  modalHeaderBottom?: number
  className: string
  children: string | JSX.Element
  onLeadersPage?: boolean
  isSelect?: boolean
  isTopUp?: boolean
}

export const MyModal = ({
  setIsActive,
  className,
  headerTitle,
  children,
}: ModalProps) => {
  const onClickHandler = () => setIsActive(false)

  return (
    <div
      className="modal modalActive"
      style={{ zIndex: 100 }}
      onClick={onClickHandler}
    >
      <div
        className={`modalContent mountedStyle modalContentActive ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalBackground" />
        <div className="modalHeader">
          <h3 className="modalHeaderTitle">{headerTitle}</h3>
          <CloseIcon onClick={onClickHandler} />
        </div>
        {children}
      </div>
    </div>
  )
}
