import styles from './button.module.scss'

export default function FilterTablet({ handleClick, kind, children }) {
  return (
    <button
      type="button"
      data-kind={kind}
      className={styles.button}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
