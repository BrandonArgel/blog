import * as React from "react";

import PassionPost from "containers/Development/Passion";

import Aside from "components/Aside";

const module = { name: "Desarrollo Personal", url: "/desarrollo-personal" };
const topics = [
	"¿Qué es la pasión realmente?",
	"Autoconocimiento y acción",
	"¿Qué hacer si no tengo claro qué es lo que me gusta?",
	"Extra y consejos",
	"Conclusión",
];

const Passion = () => {

	return (
		<>
			<PassionPost url={module.url} />
			<Aside module={module} topics={topics} />
		</>
	);
};

export default Passion;
