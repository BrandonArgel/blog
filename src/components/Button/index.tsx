import styles from "./index.module.scss";

type size = "small" | "medium" | "large";
type type = "primary" | "secondary";

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	size?: size;
	type?: type;
}

export default function Button(props: ButtonProps) {
	const { children, className = "", size = "large", type = "primary", ...rest } = props;
	return (
		<button className={`${styles[size]} ${styles[type]} ${className}`} {...rest}>
			{children}
			{type === "primary" && (
				<>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</>
			)}
		</button>
	);
}
