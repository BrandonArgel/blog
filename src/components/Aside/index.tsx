import * as React from "react";
import { Link } from "react-router-dom";

import { Title } from "components";

import { ArrowRight, ArrowLeft } from "assets/icons/arrrows";

import styles from "./index.module.scss";

interface Module {
	name: string;
	route: string;
}
interface Props {
	module: Module;
	topics: Array<string>;
}

const Aside: React.FC<Props> = ({ module, topics }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const buttonRef = React.useRef<HTMLButtonElement>(
		null
	) as React.MutableRefObject<HTMLButtonElement>;

	return (
		<>
			<aside className={`${styles.aside} ${isOpen ? styles.open : ""}`} tabIndex={-1}>
				<header className={styles.aside__header}>
					<button
						ref={buttonRef}
						className={styles.aside__header_button}
						onClick={() => setIsOpen(!isOpen)}
						aria-label={!isOpen ? "Abrir menú de temas" : "Cerrar menú de temas"}
						type="button"
					>
						{!isOpen ? <ArrowRight /> : <ArrowLeft />}
					</button>
					<Link to={`/${module.route}`} tabIndex={isOpen ? 0 : -1} aria-hidden={!isOpen}>
						<Title h={2}>
							<p>{module.name}</p>
						</Title>
					</Link>
				</header>
				<section id="summary" className={styles.topics}>
					{topics.map((topic, i) => (
						<a
							href={`#${i + 1}`}
							key={i}
							onClick={() => {
								buttonRef.current.focus();
								setIsOpen(false);
							}}
						>
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
	);
};

export default Aside;
