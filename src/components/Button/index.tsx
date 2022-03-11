import styles from "./index.module.scss";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

export default function Button(props: ButtonProps) {
	const { children, ...rest } = props;
	return (
		<button className={styles.button} {...rest}>
			{children}
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
}
