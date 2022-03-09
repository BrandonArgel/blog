import styles from "./index.module.scss"

import Social from "utils/social"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        {Social.map(({link, icon}) => (
          <a href={link} key={link}>
            {icon}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer