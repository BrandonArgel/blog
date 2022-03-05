interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const { children, onClick, className, ...rest } = props;
  return (
    <button
      className={`${className} button`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
