import * as React from "react";
import { Info } from "assets/icons/post";
import styles from "./index.module.scss";

const Information: React.FC = ({ children }) => (
	<div className={styles.info}>
		<Info />
		<p>{children}</p>
	</div>
);

export default Information;
