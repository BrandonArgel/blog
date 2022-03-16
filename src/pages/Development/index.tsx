import { SEO, Slideshow, Slide, Title } from "components";

import Banner from "assets/images/development/banner.webp";
import Confort from "assets/images/confort/banner.webp";
import { Image } from "components";
import Passion from "assets/images/passion/banner.webp";
import Motivation from "assets/images/motivation/banner.webp";

interface Props {
	route: string;
}

const Home: React.FC<Props> = ({ route }) => {
	console.log(route);
	SEO({
		title: "Desarrollo personal",
		description:
			"El desarrollo personal o crecimiento personal es un proceso en el que puedes adquirir nuevos	pensamientos, actitudes, acciones, hábitos, mejorar tu consciencia e identidad y desarrollar tu	talento y potencial.",
		image: Banner,
	});

	return (
		<>
			<Title>Desarrollo personal</Title>
			<section>
				<Slideshow speed={400}>
					<Slide
						img={Confort}
						title="¿Cómo salir de tu zona de confort?"
						link={`/${route}/como-salir-de-tu-zona-de-confort`}
					>
						La zona de confort o zona de comodidad nos sitúa en una burbuja que nos protege de lo
						desconocido e inusual. Y sigues haciéndolo por miedo a perder tu estabilidad. La zona de
						confort a simple vista puede parecer inofensiva, pero no todo es bueno. Dentro de la
						zona de confort también hay cosas negativas que no nos gustan (una relación de pareja,
						un trabajo, malas hábitos adquiridos, etc.)
					</Slide>
					<Slide
						img={Passion}
						title="¿Cómo encontrar la pasión de tu vida?"
						link={`/${route}/como-encontrar-la-pasion-de-tu-vida`}
					>
						La pasión es una de las emociones más intensas que podemos sentir en nuetras vidas, ella
						constituye el alma de nuestro propio éxito, eso que nos motiva a hacer algo, la pasión
						podemos sentirla cuando nos dedicamos a lo que realmente amamos y consideramos más
						importante, ese sentido de pertenencia que tenemos por algo, eso es la pasión.
					</Slide>
					<Slide
						img={Motivation}
						title="¿Cómo tener más motivación en tu vida?"
						link={`/${route}/como-tener-mas-motivacion-en-tu-vida`}
					>
						La motivación es eso que te mueve a seguir adelante, son esos motivos que te impulsan a
						completar tus objetivos, alcanzar tus metas, hacer realidad tus sueños. La motivación es
						esa chispa inicial que impulsa a desear algo y a conseguirlo. La motivación involucra
						las fuerzas biológicas, emocionales, sociales y cognitivas que activan el
						comportamiento. Es la fuerza impulsora detrás de las acciones humanas.
					</Slide>
				</Slideshow>
			</section>
			<article>
				<Title h={3}>¿Qué es el desarrollo personal y por qué es tan importante?</Title>
				<Image src={Banner} alt="Desarrollo personal" size="small" side="right" />
				<p>
					El desarrollo personal o crecimiento personal es un proceso en el que puedes adquirir
					nuevos pensamientos, actitudes, acciones, hábitos, mejorar tu consciencia e identidad y
					desarrollar tu talento y potencial.
				</p>
				<p>
					También permite mejorar la perspectiva con la que vemos nuestras vidas y trabajos, mejorar
					nuestras vidas, las relaciones personales, nuestro autoconocimiento y poder alcanzar tus
					metas, aspiraciones y sueños.
				</p>
				<p>
					Existen muchos beneficios que irás adquiriendo al sumergirte en este tema y también un sin
					fin de frases motivadoras y reveladoras, una de las mejores frases para iniciar en el
					desarrollo personal es la siguiente:
				</p>
				<blockquote>
					Cuida tus pensamientos, porque se convertirán en tus palabras. Cuida tus palabras, porque
					se convertirán en tus actos. Cuida tus actos, porque se convertirán en tus hábitos. Cuida
					tus hábitos, porque se convertirán en tu destino. <strong>— Mahatma Gandhi</strong>
				</blockquote>
				<p>Consejos para iniciar en el desarrollo personal:</p>
				<ol>
					<li>
						<strong>Mentalidad de crecimiento:</strong> Intentar mejorar al menos 1% al día.
						(Crecimiento exponencial)
					</li>
					<li>
						<strong>Aprendizaje:</strong> Aprender algo nuevo todos los días. (Nunca parar de
						aprender)
					</li>
					<li>
						<strong>Actitud:</strong> Ser positivo y alegre ante la vida. (Optimismo)
					</li>
					<li>
						<strong>Resiliencia:</strong> Adaptarse a situaciones adversas con resultados positivos.
						(Ser resiliente, persistente y disciplinado)
					</li>
					<li>
						<strong>Curiosidad:</strong> Siempre preguntarse el ¿Por qué? de las cosas e indagar, no
						tener miedo a preguntar.
					</li>
					<li>
						<strong>Humildad:</strong> Conocer tus fortalezas tanto como tus debilidades, ser
						conciente de ellas y utilizarlas para el bien, generosamente.
					</li>
					<li>
						<strong>Experimentar:</strong> Todos somos distintas personas, y puede que algunas cosas
						que les funcionan a algunas personas, no nos funcionen a nosotros, por eso debemos de
						experimentar y quedarnos con lo mejor. (Empirismo)
					</li>
					<li>
						<strong>Amar el proceso:</strong> No compararse con otras personas, sólo compararse con
						"tu yo del pasado", ser pacientes, no estresarse.
					</li>
				</ol>
			</article>
		</>
	);
};

export default Home;
