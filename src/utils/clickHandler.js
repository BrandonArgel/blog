import * as React from "react";

function useSingleAndDoubleClick(actionSimpleClick, actionDoubleClick, delay = 250) {
	const [click, setClick] = React.useState(0);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			if (click === 1) actionSimpleClick();
			setClick(0);
		}, delay);

		if (click === 2) actionDoubleClick();

		return () => clearTimeout(timer);
	}, [actionDoubleClick, actionSimpleClick, click, delay]);

	return () => setClick((prev) => prev + 1);
}

export default useSingleAndDoubleClick;
