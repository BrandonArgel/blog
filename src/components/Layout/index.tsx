import * as React from "react";
import { Outlet } from "react-router-dom";

import { Aside, Footer, Header, Progress } from "components";

import styles from "./index.module.scss";

const LandingLayout = () => {
	return (
		<>
			<Header />
			<main id="contenido" className={styles.main} tabIndex={-1}>
				<Outlet />
				<Footer />
			</main>
		</>
	);
};

interface Module {
	name: string;
	route: string;
}

interface Props {
	module: Module;
	topics: Array<string>;
}

const PostLayout: React.FC<Props> = ({ module, topics }) => {
	return (
		<>
			<Header />
			<Aside topics={topics} module={module} />
			<main id="contenido" className={`${styles.main} ${styles.post}`} tabIndex={-1}>
				<Outlet />
				<Progress />
				<Footer />
			</main>
		</>
	);
};

export { LandingLayout, PostLayout };
