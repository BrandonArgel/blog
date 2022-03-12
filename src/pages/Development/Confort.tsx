import * as React from "react";

import ConfortPost from "containers/Development/Confort";

import Aside from "components/Aside";
import SEO from "components/SEO";

import Banner from "assets/images/confort/banner.webp";

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

const Home = () => {

	return (
		<>
			<SEO
				title="¿Cómo salir de nuestra zona de confort? | Desarrollo Personal"
				description="La zona de confort o zona de comodidad nos sitúa en una burbuja que nos protege de lo
					desconocido e inusual. Y sigues haciéndolo por miedo a perder tu estabilidad. La zona de
					confort a simple vista puede parecer inofensiva, pero no todo es bueno. Dentro de la zona
					de confort también hay cosas negativas que no nos gustan..."
				image={Banner}
			/>
			<ConfortPost url={module.url} />
			<Aside module={module} topics={topics} />
		</>
	);
};

export default Home;
