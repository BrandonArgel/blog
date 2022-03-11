import { useState, useEffect } from "react";
import styles from './index.module.scss';

const Progress = () => {
  const [value, setValue] = useState(0);

  // Progress bar of the element main
  useEffect(() => {
    const main = document.querySelector('main') as HTMLElement;
    main.addEventListener("scroll", handleScroll);
    return () => {
      main.removeEventListener("scroll", handleScroll);
    }
  }, []);
    
  const handleScroll = () => {
    const main = document.querySelector("main") as HTMLElement;
    const footer = document.querySelector("footer") as HTMLElement;
    if (main) {
      const scrollTop = main.scrollTop;
      const scrollHeight = main.scrollHeight;
      const clientHeight = main.clientHeight;
      const footerHeight = footer.clientHeight;
      const progress = (scrollTop / (scrollHeight - clientHeight - footerHeight)) * 100;
      progress < 0 ? setValue(0) : progress > 100 ? setValue(100) : setValue(progress);

      /* In case you need to calculate only the scroll in which an element is */
      // const MainOffset = main.offsetTop;
      // const MainHeight = main.clientHeight;
      // const ClientHeight = document.documentElement.clientHeight;
      // const ClientScroll = document.documentElement.scrollTop;
      // const progress = (ClientScroll - MainOffset) / (MainHeight - ClientHeight) * 100;
      // console.log({ MainOffset, MainHeight, ClientHeight, ClientScroll, progress });
      // progress < 0 ? setValue(0) : progress > 100 ? setValue(100) : setValue(progress);
    }
  };


  return <progress id="progress" value={value} max="100" className={styles.progress} />;
}

export default Progress;