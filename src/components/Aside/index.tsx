import { useState } from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';

import { ArrowLeft, ArrowRight } from 'assets/icons/arrrows';

import styles from './index.module.scss';

interface ModuleProps {
  name: string;
  url: string;
}

interface TopicProps {
  name: string;
  id: string;
}

interface AsideProps {
  module: ModuleProps,
  topics: Array<TopicProps>
}

// TODO: Dejar a dos lineas, ver para marcar como leídos, y para avanzar conforme al scroll

const Aside: React.FC<AsideProps> = ({ module, topics }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <aside className={`${styles.aside} ${isOpen ? styles.open : ''}`}>
      <header className={styles.header}>
        <button className={styles.button} onClick={()=>setIsOpen(!isOpen)}><ArrowRight /></button>
        <Link to={module.url}>
          <Title h={2}>{module.name}</Title>
        </Link>
      </header>
      <section className={styles.topics}>
        {topics.map((topic, i) => (
          <a href={`#${topic.id}`} key={i}>
            <div className={styles.item}>
              <span className={styles.number}>{i + 1}</span>
              <div className={styles.name}>
                <p>{topic.name}</p>
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