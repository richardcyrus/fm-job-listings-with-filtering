import styles from './button.module.scss'

export default function ClearButton({ children, handleClick }) {
  return (
    <button type="button" className={styles.clearButton} onClick={handleClick}>
      {children}
    </button>
  )
}
