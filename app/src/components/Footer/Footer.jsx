import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.inner}>
    <div className="container p-4">
      <span className="text-dark d-flex flex-column align-items-center">
        © 2022 Copyright: Homework Project
      </span>
    </div>
  </footer>
)

export default Footer
