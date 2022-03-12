import * as React from "react";

import ConfortPost from "containers/Development/Confort";

import Aside from "components/Aside";

const module = { name: "Desarrollo Personal", url: "/desarrollo-personal" };
const topics = [
	"¿Qué es la zona de confort?",
	"Dificultades al intentar salir de nuestra zona de confort",
	"¿Es importante salir de nuestra zona de confort?",
	"El orden y el caos",
	"Conquista tu zona de confort",
	"Rompe el patrón",
	"Conclusión",
];

const Confort = () => {

	return (
		<>
			<ConfortPost url={module.url} />
			<Aside module={module} topics={topics} />
		</>
	);
};

export default Confort;
