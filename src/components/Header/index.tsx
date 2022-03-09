import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "assets/icons/logo.js";

import NavItems from "utils/navigation";

import styles from "./index.module.scss";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link to="/">
					{/* <Logo /> BRAND BLOGS */}
					BRAND BLOGS
				</Link>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					{NavItems.map((item) => (
						<li key={item.name}>
							<Link to={item.url}>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<svg
				tabIndex={0}
				className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
				height="32"
				onClick={() => setIsOpen(!isOpen)}
				width="32"
			>
				<line className={styles.top} x1="10%" y1="20%" x2="50%" y2="20%" />
				<line className={styles.middle} x1="10%" y1="50%" x2="90%" y2="50%" />
				<line className={styles.bottom} x1="50%" y1="80%" x2="90%" y2="80%" />
			</svg>
			<aside className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
				<nav>
					<ul className={styles.navList}>
						{NavItems.map((item) => (
							<li key={item.name}>
								<Link onClick={() => setIsOpen(!isOpen)} to={item.url}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</aside>
			{isOpen && (
				<button onClick={() => setIsOpen(!isOpen)} className={styles.menuBackdrop}></button>
			)}
		</header>
	);
};

export default Header;
