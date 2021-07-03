import Button from '../Button'

import styles from './card.module.scss'

export default function Card(props) {
  return (
    <div className={`${styles.card} ${props.featured && styles.featured}`}>
      <div className={styles.cardImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={props.logo} alt={`${props.company} Logo`} />
      </div>
      <div className={styles.cardHead}>
        <p className={styles.company}>{props.company}</p>
        <p className={styles.position}>{props.position}</p>
        <p className={styles.postedAt}>{props.postedAt}</p>
        <p className={styles.contract}>{props.contract}</p>
        <p className={styles.location}>{props.location}</p>
      </div>
      <div className={styles.cardBody}>
        <Button>{props.role}</Button>
        <Button>{props.level}</Button>
        {props.languages.map((language) => (
          <Button key={language}>{language}</Button>
        ))}
        {props.tools.map((tool) => (
          <Button key={tool}>{tool}</Button>
        ))}
      </div>
    </div>
  )
}
