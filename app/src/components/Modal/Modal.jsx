import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './modal.module.css'
import { modalWrVariants, modalInnerVariants } from './modalAnimation'

const Modal = ({ children, state, ...rest }) => ReactDOM.createPortal(
  <AnimatePresence>
    {state && <ModalInner {...rest}>{children}</ModalInner>}
  </AnimatePresence>,
  document.getElementById('modal-root'),
)

export default Modal

const ModalInner = ({ children, onClose }) => {
  function escHandler(e) {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.document.addEventListener('keydown', escHandler)

    return () => {
      window.document.removeEventListener('keydown', escHandler)
    }
  }, [])

  const closeClickHandler = () => {
    onClose()
  }

  const innerClickHandler = (e) => {
    e.stopPropagation()
  }

  return (
    <motion.div variants={modalWrVariants} initial="start" animate="show" exit="end" onClick={closeClickHandler} className={styles.wrapper}>
      <motion.div
        variants={modalInnerVariants}
        onClick={innerClickHandler}
        className={styles.inner}
      >
        <svg
          onClick={closeClickHandler}
          role="button"
          className={`bi bi-x-lg ${styles.icon}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path fillrule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
          <path fillrule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
        </svg>
        {children}
      </motion.div>
    </motion.div>
  )
}
