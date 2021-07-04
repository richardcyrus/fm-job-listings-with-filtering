import styles from './button.module.scss'

export default function FilterButton({ children, handleClick, kind }) {
  return (
    <button
      type="button"
      data-kind={kind}
      onClick={handleClick}
      className={`${styles.button} ${styles.filterButton}`}
    >
      {children} <span className={styles.removeIcon}></span>
    </button>
  )
}
