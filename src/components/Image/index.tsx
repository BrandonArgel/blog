import * as React from "react";

import styles from "./index.module.scss";

type Size = "super-small" | "small" | "medium" | "large";
type Side = "left" | "right";

type ImageProps = {
	src: string;
	alt: string;
	size: Size;
	side?: Side;
	lazy?: boolean;
};

const Image: React.FC<ImageProps> = ({ src, alt, size = "large", side, lazy = true }) => {
	return (
		<img
			className={`${styles.image} ${styles[size]} ${side ? styles[side] : ""}`}
			src={src}
			alt={alt}
			loading={lazy ? "lazy" : undefined}
		/>
	);
};

export default Image;
