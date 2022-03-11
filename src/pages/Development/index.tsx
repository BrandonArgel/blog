import * as React from "react";

import { Slideshow, Slide } from "components/Slideshow";
import Title from "components/Title";

import Confort from "assets/images/confort/banner.jpg";
import Passion from "assets/images/passion/banner.jpg";

const Home = () => {
	return (
		<>
			<Title>Desarrollo personal</Title>
			<Slideshow speed={400}>
				<Slide
					img={Confort}
					title="¿Cómo salir de tu zona de confort?"
					link="/desarrollo-personal/como-salir-de-tu-zona-de-confort"
				>
					La zona de confort o zona de comodidad nos sitúa en una burbuja que nos protege de lo
					desconocido e inusual. Y sigues haciéndolo por miedo a perder tu estabilidad. La zona de
					confort a simple vista puede parecer inofensiva, pero no todo es bueno. Dentro de la zona
					de confort también hay cosas negativas que no nos gustan (una relación de pareja, un
					trabajo, malas hábitos adquiridos, etc.)
				</Slide>
				<Slide
					img={Passion}
					title="¿Cómo salir de tu zona de confort?"
					link="/desarrollo-personal/como-salir-de-tu-zona-de-confort"
				>
					La zona de confort o zona de comodidad nos sitúa en una burbuja que nos protege de lo
					desconocido e inusual. Y sigues haciéndolo por miedo a perder tu estabilidad. La zona de
					confort a simple vista puede parecer inofensiva, pero no todo es bueno. Dentro de la zona
					de confort también hay cosas negativas que no nos gustan (una relación de pareja, un
					trabajo, malas hábitos adquiridos, etc.)
				</Slide>
				<Slide
					img={Passion}
					title="¿Cómo salir de tu zona de confort?"
					link="/desarrollo-personal/como-salir-de-tu-zona-de-confort"
				>
					La zona de confort o zona de comodidad nos sitúa en una burbuja que nos protege de lo
					desconocido e inusual. Y sigues haciéndolo por miedo a perder tu estabilidad. La zona de
					confort a simple vista puede parecer inofensiva, pero no todo es bueno. Dentro de la zona
					de confort también hay cosas negativas que no nos gustan (una relación de pareja, un
					trabajo, malas hábitos adquiridos, etc.)
				</Slide>
				<Slide
					img={Passion}
					title="¿Cómo salir de tu zona de confort?"
					link="/desarrollo-personal/como-salir-de-tu-zona-de-confort"
				>
					La zona de confort o zona de comodidad nos sitúa en una burbuja que nos protege de lo
					desconocido e inusual. Y sigues haciéndolo por miedo a perder tu estabilidad. La zona de
					confort a simple vista puede parecer inofensiva, pero no todo es bueno. Dentro de la zona
					de confort también hay cosas negativas que no nos gustan (una relación de pareja, un
					trabajo, malas hábitos adquiridos, etc.)
				</Slide>
			</Slideshow>
		</>
	);
};

export default Home;
