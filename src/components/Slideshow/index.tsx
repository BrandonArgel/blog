import * as React from "react";
import { useNavigate } from "react-router-dom";
import Title from "components/Title";
import { ArrowLeft, ArrowRight } from "assets/icons/arrrows";
import clickHandler from "utils/clickHandler";
import styles from "./index.module.scss";

interface SlideshowProps {
	children: React.ReactNode;
	speed?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ children, speed = 500 }) => {
	const slideshow = React.useRef<HTMLInputElement>(
		null
	) as React.MutableRefObject<HTMLInputElement>;

	const next = () => {
		if (slideshow.current?.children.length > 0) {
			const firstElement = slideshow.current?.children[0] as HTMLElement;
			const widthSlide = firstElement.clientWidth;

			slideshow.current.style.transition = `${speed}ms ease-out all`;
			slideshow.current.style.transform = `translateX(-${widthSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = "none";
				slideshow.current.style.transform = `translateX(0)`;
				slideshow.current.appendChild(firstElement);
			}, speed);
		}
	};

	const prev = () => {
		if (slideshow.current.children.length > 0) {
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			const widthSlide = ultimoElemento.clientWidth;
			slideshow.current.style.transition = "none";
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			slideshow.current.style.transform = `translateX(-${widthSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${speed}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 0);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.slideshow} ref={slideshow}>
				{children}
			</div>
			<div className={styles.controls}>
				<button className={styles.prev} onClick={prev} aria-label="Anterior">
					<ArrowLeft />
				</button>
				<button className={styles.next} onClick={next} aria-label="Siguiente">
					<ArrowRight />
				</button>
			</div>
		</div>
	);
};

interface SlideProps {
	children: React.ReactNode;
	img: string;
	title: string;
	link: string;
}

const Slide = ({ children, img, title, link }: SlideProps) => {
	const isTouch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	const click = clickHandler(clickCallback, doubleClickCallback);
	const navigate = useNavigate();

	function clickCallback() {
		if (!isTouch) {
			navigate(link);
		}
	}

	function doubleClickCallback() {
		if (isTouch) {
			navigate(link);
		}
	}

	return (
		<div className={styles.slide}>
			<button className={styles.content} onClick={isTouch ? click : clickCallback} aria-label="Ir al post">
				<img src={img} alt={title} />
				<div className={styles.description}>
					<Title h={2}>{title}</Title>
					<p>{children}</p>
					<p className={styles.mobile}>
						{isTouch ? "¡Doble Clic para seguir leyendo!" : "¡Clic para seguir leyendo!"}
					</p>
				</div>
			</button>
		</div>
	);
};

export { Slideshow, Slide };
