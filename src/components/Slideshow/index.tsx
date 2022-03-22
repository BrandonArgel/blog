import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "components";
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

	const initialRender = React.useCallback(() => {
		const slides = Array.from(slideshow.current.children);
		const viewportWidth = window.innerWidth;
		const visibleSlides = viewportWidth < 768 ? 1 : viewportWidth < 1024 ? 2 : 3;
		slides.forEach((slide, i) => {
			const child = slide.children[0] as HTMLElement;
			const img = slide.children[0].children[0] as HTMLImageElement;
			i + 1 > visibleSlides && img.setAttribute("loading", "lazy");
			i + 1 <= visibleSlides
				? child.removeAttribute("tabindex")
				: child.setAttribute("tabindex", "-1");
			i + 1 <= visibleSlides
				? slide.removeAttribute("aria-hidden")
				: slide.setAttribute("aria-hidden", "true");
		});
	}, []);

	const updateVisibleSlides = React.useCallback(() => {
		const slides = Array.from(slideshow.current.children);
		const viewportWidth = window.innerWidth;
		const visibleSlides = viewportWidth < 768 ? 1 : viewportWidth < 1024 ? 2 : 3;
		slides.forEach((slide, i) => {
			// console.log({visibleSlides, i: i+1})
			const child = slide.children[0] as HTMLElement;
			i + 1 <= visibleSlides
				? child.removeAttribute("tabindex")
				: child.setAttribute("tabindex", "-1");
			i + 1 <= visibleSlides
				? slide.removeAttribute("aria-hidden")
				: slide.setAttribute("aria-hidden", "true");
		});
	}, []);

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

				updateVisibleSlides();
			}, speed);
		}
	};

	const prev = () => {
		if (slideshow.current.children.length > 0) {
			const index = slideshow.current.children.length - 1;
			const lastElement = slideshow.current.children[index];
			const widthSlide = lastElement.clientWidth;
			slideshow.current.style.transition = "none";
			slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
			slideshow.current.style.transform = `translateX(-${widthSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${speed}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 0);
		}

		updateVisibleSlides();
	};

	React.useEffect(() => {
		initialRender();
	}, [initialRender]);

	return (
		<div className={styles.container}>
			<div className={styles.slideshow} ref={slideshow}>
				{children}
			</div>
			<div className={styles.controls}>
				<button type="button" className={styles.prev} onClick={prev} aria-label="Anterior Post">
					<ArrowLeft />
				</button>
				<button type="button" className={styles.next} onClick={next} aria-label="Siguiente Post">
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
	// const isTouch = navigator.userAgentData.mobile
	const isTouch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);
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
			<button
				className={styles.content}
				onClick={isTouch ? click : clickCallback}
				aria-label={
					isTouch ? `Doble click para ir al post de ${title}` : `Clic para ir al post de ${title}`
				}
			>
				<img src={img} alt={title} />
				<Title h={2}>{title}</Title>
				<div className={styles.description}>
					<Title h={2}>{title}</Title>
					<p>{children}</p>
					<p className={styles.info}>
						{isTouch ? "¡Toca dos veces para seguir leyendo!" : "¡Clic para seguir leyendo!"}
					</p>
				</div>
			</button>
		</div>
	);
};

export { Slideshow, Slide };
