import styles from './button.module.scss'

export default function FilterButton({ children, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.button} ${styles.filterButton}`}
    >
      {children} <span className={styles.removeIcon}></span>
    </button>
  )
}
