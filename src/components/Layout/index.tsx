import * as React from "react";
import { Outlet } from "react-router-dom";

import Aside from "components/Aside";
import Footer from "components/Footer";
import Header from "components/Header";
import Progress from "components/Progress";

import styles from "./index.module.scss";

const LandingLayout = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Outlet />
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
			<main className={`${styles.main} ${styles.post}`}>
				<Outlet />
				<Progress />
				<Footer />
			</main>
		</>
	);
};

export { LandingLayout, PostLayout };
