import * as React from "react";
import { Outlet } from "react-router-dom";

import Header from "components/Header";

import styles from "./index.module.scss";

const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<div className={styles.home}>
				<Outlet />
			</div>
		</>
	);
};

const PostLayout: React.FC = () => {
	return (
		<>
			<Header />
			<div className={styles.post}>
				<Outlet />
			</div>
		</>
	);
};

export { Layout, PostLayout };
