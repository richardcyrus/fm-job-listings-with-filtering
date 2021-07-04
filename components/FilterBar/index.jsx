import ClearButton from '../Buttons/ClearButton'

import styles from './filterbar.module.scss'

export default function FilterBar({ children, handleClear }) {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterButtons}>{children}</div>
      <ClearButton handleClick={handleClear}>Clear</ClearButton>
    </div>
  )
}
