import { useState } from 'react';

import Logo from 'assets/icons/logo.js'

import styles from './index.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
    <div className={styles.logo}>
      <Logo /> BRAND BLOGS
    </div>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><a href="#a">Desarrollo Personal</a></li>
        <li><a href="#a">Tecnología</a></li>
        <li><a href="#a">Salud</a></li>
      </ul>
    </nav>
    <svg
      tabIndex={0}
      className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}	
      height="32"
      onClick={() => setIsOpen(!isOpen)}
      width="32"
    >
      <line className={styles.top} x1="10%" y1="20%" x2="50%" y2="20%" />
      <line className={styles.middle} x1="10%" y1="50%" x2="90%" y2="50%" />
      <line className={styles.bottom} x1="50%" y1="80%" x2="90%" y2="80%" />
    </svg>
    <aside className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#a">Desarrollo Personal</a></li>
          <li><a href="#a">Tecnología</a></li>
          <li><a href="#a">Salud</a></li>
        </ul>
      </nav>
    </aside>
  </header>
  )
}

export default Header;