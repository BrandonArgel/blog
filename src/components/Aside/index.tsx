import * as React from "react";
import { Link } from "react-router-dom";

import Title from "components/Title";

import { ArrowRight } from "assets/icons/arrrows";

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

	return (
		<>
			<aside className={`${styles.aside} ${isOpen ? styles.open : ""}`}>
				<header className={styles.header}>
					<button className={styles.button} onClick={() => setIsOpen(!isOpen)} aria-label={!isOpen ? "Expandir menú de temas" : "Contraer menú de temas"}>
						<ArrowRight />
					</button>
					<Link to={`/${module.route}`}>
						<Title h={2}>
							<p>{module.name}</p>
						</Title>
					</Link>
				</header>
				<section id="summary" className={styles.topics}>
					{topics.map((topic, i) => (
						<a href={`#${i + 1}`} key={i} onClick={() => setIsOpen(false)}>
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
