import * as React from "react";
import { Link } from 'react-router-dom';

import Title from 'components/Title';

import { ArrowRight } from 'assets/icons/arrrows';

import styles from './index.module.scss';

interface ModuleProps {
  name: string;
  url: string;
}

interface AsideProps {
  module: ModuleProps,
  topics: Array<string>
}

const Aside: React.FC<AsideProps> = ({ module, topics }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const Main = document.querySelector('main') as HTMLElement;
    const Summary = document.getElementById('summary') as HTMLElement;
    const Titles = Main.querySelectorAll('h1, h2') as NodeListOf<HTMLElement>;
    const Items = Summary.querySelectorAll('a') as NodeListOf<HTMLElement>;
    let current = 0;
    let prev = 0

    const updateAside = () => {
      Array.from(Items).forEach((item, i) => {
        if (i <= current) {
          const element = item.firstChild as HTMLElement;
          element.classList.add(styles.active);
        } else {
          const element = item.firstChild as HTMLElement;
          element.classList.remove(styles.active);
        }
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          prev = current;
          current = Array.from(Titles).indexOf(entry.target as HTMLElement);
          updateAside();
        } else { 
          const index = Array.from(Titles).indexOf(entry.target as HTMLElement);
          if(index === current) {
            if(prev > current) {
              prev = current;
              current++;
            } else {
              prev = current;
              current--;
            }
            updateAside();
          }
        }
      })
    }, {
      root: Main,
      rootMargin: '60px 0px 0px 0px',
      threshold: 1
    })

    Titles.forEach(title => observer.observe(title));
  })

  return (
    <>
    <aside className={`${styles.aside} ${isOpen ? styles.open : ''}`}>
      <header className={styles.header}>
        <button className={styles.button} onClick={()=>setIsOpen(!isOpen)}><ArrowRight /></button>
        <Link to={module.url}>
          <Title h={2}><p>{module.name}</p></Title>
        </Link>
      </header>
      <section id="summary" className={styles.topics}>
        {topics.map((topic, i) => (
          <a href={`#${i + 1}`} key={i} onClick={()=>setIsOpen(false)}>
            <div className={styles.item}>
              <span className={styles.number}>{i + 1}</span>
              <div className={styles.name}>
                <p>{topic}</p>
              </div>
            </div>
          </a>
        ))}
      </section>
    </aside>
    {isOpen && (
				<button onClick={() => setIsOpen(!isOpen)} className={styles.asideBackdrop}></button>
			)}
    </>
  )
}

export default Aside;