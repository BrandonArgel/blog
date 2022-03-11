import * as React from "react";
import { Outlet } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

import styles from "./index.module.scss";

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

const PostLayout: React.FC = ({ children }) => {
	React.useEffect(() => {
		const Main = document.querySelector("main") as HTMLElement;
		const Sections = Main.querySelectorAll("section") as NodeListOf<HTMLElement>;

		// Add id i++ to each section
		Array.from(Sections).forEach((section, i) => {
			section.id = `${i + 1}`;
		});
	});

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
