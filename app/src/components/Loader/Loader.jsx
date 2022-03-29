import styles from './Loader.module.css'

const Loader = () => (
  <div className={styles['lds-roller']}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
)

export default Loader
