import styles from './button.module.scss'

export default function Button({ children }) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  )
}
