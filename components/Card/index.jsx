import FilterTablet from '../Buttons/FilterTablet'

import styles from './card.module.scss'

export default function Card(props) {
  return (
    <div className={`${styles.card} ${props.featured && styles.featured}`}>
      <div className={styles.cardImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={props.logo} alt={`${props.company} Logo`} />
      </div>
      <div className={styles.cardHead}>
        <p className={styles.company}>
          {props.company}
          <span className={props.new ? styles.pillNew : undefined}>
            {props.new && 'New!'}
          </span>
          <span className={props.featured ? styles.pillFeatured : undefined}>
            {props.featured && 'Featured'}
          </span>
        </p>
        <p className={styles.position}>{props.position}</p>
        <p className={styles.postedAt}>{props.postedAt}</p>
        <p className={styles.contract}>{props.contract}</p>
        <p className={styles.location}>{props.location}</p>
      </div>
      <div className={styles.cardBody}>
        <FilterTablet kind="role" handleClick={props.handleFilterTabletClick}>
          {props.role}
        </FilterTablet>
        <FilterTablet kind="level" handleClick={props.handleFilterTabletClick}>
          {props.level}
        </FilterTablet>
        {props.languages.map((language) => (
          <FilterTablet
            key={`${props.id}_${language}`}
            kind="languages"
            handleClick={props.handleFilterTabletClick}
          >
            {language}
          </FilterTablet>
        ))}
        {props.tools.map((tool) => (
          <FilterTablet
            key={`${props.id}_${tool}`}
            kind="tools"
            handleClick={props.handleFilterTabletClick}
          >
            {tool}
          </FilterTablet>
        ))}
      </div>
    </div>
  )
}
