import { useState, useEffect } from "react";
import styles from './index.module.scss';

const Progress = () => {
  const [value, setValue] = useState(0);

  // Progress bar of the element main
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    }
  }, []);
    
  const handleScroll = () => {
    const main = document.querySelector("main") as HTMLElement | null;
    if (main) {
      const MainOffset = main.offsetTop;
      const MainHeight = main.clientHeight;
      const ClientHeight = document.documentElement.clientHeight;
      const ClientScroll = document.documentElement.scrollTop;
      const progress = (ClientScroll - MainOffset) / (MainHeight - ClientHeight) * 100;
      setValue(progress);
    }
  };


  return <progress id="progress" value={value} max="100" className={styles.progress} />;
}

export default Progress;