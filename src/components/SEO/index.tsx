import * as React from "react";

interface Props {
	title: string;
	description: string;
	image?: string;
}

const SEO = ({ title, description, image }: Props) => {
	React.useEffect(() => {
		document.title = title;
		document.querySelector('meta[name="description"]')!.setAttribute("content", description);
		if (image) {
			document.querySelector('meta[name="image"]')!.setAttribute("content", image);
		}
	});
};

export default SEO;
