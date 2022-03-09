import * as React from 'react';
import { ArrowLeft, ArrowRight } from 'assets/icons/arrrows';
import styles from './index.module.scss';

interface SlideshowProps {
  children: React.ReactNode;
  speed?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ children, speed = 500 }) => {
  const slideshow = React.useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>;

  const next = () => {
		if(slideshow.current?.children.length > 0){
			const firstElement = slideshow.current?.children[0] as HTMLElement;
      const widthSlide = firstElement.clientWidth;      

			slideshow.current.style.transition = `${speed}ms ease-out all`;
			slideshow.current.style.transform = `translateX(-${widthSlide}px)`;
			
      setTimeout(() => {
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;
				slideshow.current.appendChild(firstElement);
			}, speed);
		}
	}

  const prev = () => {
		if(slideshow.current.children.length > 0){
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
      const widthSlide = ultimoElemento.clientWidth;
			slideshow.current.style.transition = 'none';
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			slideshow.current.style.transform = `translateX(-${widthSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `${speed}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 0);
		}
  }

  return (
    <div className={styles.container}>
      <div className={styles.slideshow} ref={slideshow}>
        {children}
      </div>
      <div className={styles.controls}>
        <button className={styles.prev} onClick={prev}>
          <ArrowLeft />
        </button>
        <button className={styles.next} onClick={next}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

interface SlideProps {
  children: React.ReactNode;
}

const Slide = ({ children }: SlideProps) => {
  return (
    <div className={styles.slide}>
      {children}
    </div>
  );
}

export { Slideshow, Slide };