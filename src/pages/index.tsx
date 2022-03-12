import * as React from "react";

import { Slideshow, Slide } from "components/Slideshow";
import SEO from "components/SEO";
import Title from "components/Title";

import Confort from "assets/images/confort/banner.webp";
import Passion from "assets/images/passion/banner.webp";
import Motivation from "assets/images/motivation/banner.webp";

const Home = () => {
	SEO({ title: "Home", description:"Descubre interesantes temas sobre desarrollo personal, salud y tecnología", image: "https://blog.brandonargel.me/og.png" });

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
					title="¿Cómo encontrar la pasión de tu vida?"
					link="/desarrollo-personal/como-encontrar-la-pasion-de-tu-vida"
				>
					La pasión es una de las emociones más intensas que podemos sentir en nuetras vidas, ella
					constituye el alma de nuestro propio éxito, eso que nos motiva a hacer algo, la pasión
					podemos sentirla cuando nos dedicamos a lo que realmente amamos y consideramos más
					importante, ese sentido de pertenencia que tenemos por algo, eso es la pasión.
				</Slide>
				<Slide
					img={Motivation}
					title="¿Cómo tener más motivación en tu vida?"
					link="/desarrollo-personal/como-salir-de-tu-zona-de-confort"
				>
					La motivación es eso que te mueve a seguir adelante, son esos motivos que te impulsan a
					completar tus objetivos, alcanzar tus metas, hacer realidad tus sueños. La motivación es
					esa chispa inicial que impulsa a desear algo y a conseguirlo. La motivación involucra las
					fuerzas biológicas, emocionales, sociales y cognitivas que activan el comportamiento. Es
					la fuerza impulsora detrás de las acciones humanas.
				</Slide>
			</Slideshow>
		</>
	);
};

export default Home;
