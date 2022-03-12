import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "components/Button";
import Footer from "components/Footer";
import Image from "components/Image";
import Progress from "components/Progress";
import Title from "components/Title";

import Banner from "assets/images/passion/banner.webp";
import Brainstorming from "assets/images/passion/brainstorming.webp";
import LovePassion from "assets/images/passion/lovepassion.webp";
import PasionWoman from "assets/images/passion/passionwoman.webp";
import PassionMan from "assets/images/passion/passionman.webp";
import Time from "assets/images/passion/time.webp";

import "containers/post.module.scss";

interface Props {
	url: string;
}

const PassionPost: React.FC<Props> = ({ url }) => {
	const navigate = useNavigate();

	React.useEffect(() => {
		const Main = document.querySelector("main") as HTMLElement;
		const Sections = Main.querySelectorAll("section") as NodeListOf<HTMLElement>;

		Array.from(Sections).forEach((section, i) => {
			section.id = `${i + 1}`;
		});
	});

	return (
		<main>
			<article>
				<section>
					<Title>¿Cómo encontrar la pasión de tu vida?</Title>
					<Image src={Banner} alt="La pasión" size="large" />
					<p>
						Seguramente si eres como yo te habrás preguntado{" "}
						<strong>¿Cuál es la pasión de mi vida?</strong> Y es que yo por mucho tiempo me había
						obsesionado con encontrar la pasión de mi vida y en este blog encontrarás todas las
						cosas que descubrí y que me ayudaron a encontrar la pasión de mi vida.
					</p>
					<p>
						Para responder esta pregunta, lo primero que debemos hacer, es entender qué significa o
						qué es pasión realmente.
					</p>
					<p>
						La pasión es una <strong>intensa afición</strong> y <strong>emoción</strong> que sientes
						hacia algo, es una inclinación muy fuerte hacia algo o alguien, puede encontrarse en
						aquellas cosas y <strong>actividades que te causan deleite</strong>,{" "}
						<strong>placer</strong> y que simplemente <strong>adoras hacer</strong>, algo que te
						"apasiona".
					</p>
				</section>
				<section>
					<Title h={2}>Autoconocimiento y acción</Title>
					<Image src={Time} alt="La pasión" size="small" side="left" />
					<p>La pasión no siempre se presenta de forma evidente en nuestras vidas.</p>
					<p>
						De hecho, la mayoría de personas necesitan pensar en ello durante meses e incluso años.
					</p>
					<p>
						Existen diferentes maneras para encontrar la pasión de tu vida o acelerar el proceso.
					</p>
					<blockquote>
						La calidad de nuestras preguntas determina la calidad de nuestras vidas.{" "}
						<strong>— John Miller</strong>
					</blockquote>
					<ol>
						<li>
							<strong>Lluvia de ideas:</strong> Para encontrar tu pasión debes de prestar atención a
							tu vida, tener en cuenta las cosas que te encantan, para esto puedes guiarte
							respondiendo una serie de preguntas:
							<ul>
								<Image src={Brainstorming} alt="Lluvia de ideas" size="super-small" side="right" />
								<li>¿Si pudiera hacer algo por el resto de mi vida, qué sería?</li>
								<li>¿Qué cosas me producen una gran satisfacción y alegría?</li>
								<li>¿A qué me dedicaría si el dinero no fuera un problema?</li>
								<li>¿Qué me hace sentir bien conmigo mismo?</li>
								<li>¿Qué me hace perder la noción del tiempo?</li>
								<li>¿En qué utilizo mi tiempo libre?</li>
								<li>¿Qué me gusta hacer?</li>
							</ul>
							<p>
								Tómate el tiempo que necesites para responderlas, y es muy importante que seas
								sincero.
							</p>
						</li>
						<li>
							<Image src={PasionWoman} alt="La pasión de tu vida" size="super-small" side="right" />
							<strong>Piensa en tus sueños:</strong> Ahora tienes que escribir todas las cosas con
							las que alguna vez soñaste, o siempre soñaste hacer, pero no hiciste por falta de
							tiempo, dinero, porque te atemorizaba, porque no les veías la finalidad o por
							cualquier otra razón.
							<ul>
								<li>
									¿Hay algo que desee hacer pero no hago por miedos relacionados con el dinero?
								</li>
								<li>¿Hay algo que no me animé a probar porque me saca de mi zona de confort?</li>
								<li>¿Hay algo que desee hacer pero no hago por algún otro miedo?</li>
								<li>¿Qué es eso con lo que siempre soñé pero nunca hice?</li>
								<li>¿Qué quería ser al crecer cuando era chico?</li>
								<li>¿Tuve alguna vez un sueño que abandoné?</li>
							</ul>
							<p>
								Tómate el tiempo que necesites para responderlas, y de igual manera es muy
								importante que seas sincero.
							</p>
						</li>
						<li>
							<Image src={LovePassion} alt="Lluvia de ideas" size="super-small" side="right" />
							<strong>Reconoce y distingue las cosas más importantes para ti:</strong> Una vez que
							hayas respondido estas preguntas seguramente tendrás una mejor idea del tipo de cosas
							que ya te interesan y siempre quisiste probar. Ahora que tienes ese autoconocimiento
							podrás descubrir con mayor facilidad cuál es la pasión de tu vida.
							<p>
								Es posible que si eres muy joven, o por cualquier otro motivo aún sigas sin ningún
								indicio de cuál podría ser la pasíon de tu vida (Esto me pasó a mí) ¡Pero no te
								preocupes! Más adelante <strong>encontrarás un truco infalible</strong> que no te
								puedes perder y también algo que necesitas saber acerca de la pasión.
							</p>
							<blockquote>
								Tocar una nota equivocada es insignificante, tocar sin pasión es inexcusable.
								<strong>— Ludwig van Beethoven</strong>
							</blockquote>
						</li>
					</ol>
				</section>
				<section>
					<Title h={2}>¿Qué hacer si no tengo claro qué es lo que me gusta?</Title>
					<p>
						Si todavía no sabes que es lo que realmente te gusta es por que todavía no has
						experimentado lo suficiente, la buena noticia es que esto se puede resolver fácilmente.
					</p>
					<ul>
						<li>
							<strong>Date la oportunidad de educarte:</strong> Aprende nuevos temas de tu interés,
							con cursos, libros o lo que te guste.
						</li>
						<li>
							<strong>Prueba cosas nuevas:</strong> Practica nuevos deportes, explora tu lado
							artístico, encuentra un nuevo hobby, sal de tu{" "}
							<Link to={`${url}/como-salir-de-tu-zona-de-confort`}>zona de confort</Link>.
						</li>
						<li>
							<strong>Investiga:</strong> Adéntrate en nuevos temas interesantes.
						</li>
						<li>
							<strong>Experimenta:</strong> No existe una fórmula general para encontrar la pasión
							de tu vida, cada persona es única y lo importante es que pruebes diferentes opciones y
							averigües cuáles son las que te funcionan mejor a ti.
						</li>
						<li>
							<strong>Haz introspección:</strong> Observa el interior de ti, y analisa todo lo que
							ocurre dentro de tu mente cuando estas realizando diferentes actividades para
							identificar si algo de lo que haces es apasionante para ti.
						</li>
						<li>
							<strong>Transforma tu pasión en un propósito claro y medible:</strong> Una vez que
							tengas claro aquello que posiblemente te apasiona, hay que saber aprovecharlo de
							manera estratégica. Lo mejor es recurrir a trazarte un propósito o meta 100% medible,
							clasificada bajo procesos y pasos concisos sobre lo que vas a realizar durante cada
							fase y los resultados a los que poco a poco planeas acercarte. Esto no solo va
							ayudarte a alcanzar tus metas, además tendrás más tiempo y espacio de reflexión y
							conexión para cultivar y aprovechar mejor aquello que te apasiona.
							<p>
								Ahora lo más posible ya tengas una idea de cuál es tu pasión.{" "}
								<strong>¡Felicitaciones!</strong> Siguiendo los consejos de este blog e investigando
								más ten por seguro que tendrás una vida plena y te irá muy bien.
							</p>
							<p>
								También es muy importante que disfrutes el proceso, creéme que es muy largo y más si
								quieres ser una persona exitosa en la vida, necesitarás mucha dedicación, talento,
								perseverancia, disciplina, resiliencia y eso solo es el principio.
							</p>
						</li>
					</ul>
				</section>
				<section>
					<Title h={2}>Encontrar tu Pasión Instantáneamente</Title>
					<p>
						Pero... ¿Y si después de hacer todo lo anterior todavía no tienes claro que es lo que
						quieres hacer?
					</p>
					<p>¡No te preocupes! Es hora de la técnica infalible que te conté anteriormente.</p>
					<p>
						El mundo necesita gente que ame lo que hace, pero sobre todo, gente que se tome el
						tiempo necesario para descubrirlo.
					</p>
					<blockquote>
						El truco no consiste en hacer lo que te gusta, sino en que te guste lo que haces.{" "}
						<strong>— Victor Küppers</strong>
					</blockquote>
					<Image src={PassionMan} alt="La pasión de tu vida" size="large" />
					<p>
						Esto no es más que la introducción a esta sección, y continuaré con otra frase muy
						reveladora que te dará la epifanía adecuada para entender de lo que te estoy hablando:
					</p>
					<blockquote>
						La pasión es algo demasiado importante como para no tenerla, pero demasiado
						inconsistente como para estar constantemente persiguiéndola. (No persigas tu pasión,
						siempre llévala contigo) <strong>— Mike Rowe</strong>
					</blockquote>
					<p>
						Y es que las personas que son más felices y viven su vida plenamente no esperan a
						encontrar su pasión, esas personas <strong>han puesto pasión en sus vidas</strong>, al
						princiío puede sonar un poco redundante, pero esta frase cambió la percepción que tenía
						sobre el mundo y la vida.
					</p>
					<p>
						Muchas personas viven esperando a encontrar su pasión y viven desanimados, o apagados
						hasta que la encuentran, tu no caigas en este error.
					</p>
					<p>Otra cosa, es importante recalcar la diferencia entre pasión y destino.</p>
					<p>
						<strong>Pasión:</strong> La pasión tienes que ponerla en todo lo que haces.
					</p>
					<p>
						<strong>Destino:</strong> Tu destino quizás tardarás más en encontrarlo.
					</p>
					<p>
						Ahora te dejo una serie de preguntas que en realidad es opcional si las quieres
						contestar o no:
					</p>
					<ol>
						<li>
							¿Como puedo contagiar de alegría a la gente con la que estoy trabajando/estudiando?
						</li>
						<li>¿Como puedo hacer lo que estoy haciendo de la mejor manera posible?</li>
						<li>¿Si mi vida fuera un libro cómo quisiera que leyeran mi libro?</li>
						<li>¿Como puedo mejorar como persona con lo que estoy haciendo?</li>
						<li>¿Como puedo simplificar lo que estoy haciendo día a día?</li>
					</ol>
					<p>Y el consejo que te quería dar no era sólo uno, son los siguientes:</p>
					<ol>
						<li><strong>No persigas tu pasión, SIEMPRE llévala contigo, en todo lo que haces.</strong></li>
						<li><strong>Disfruta el proceso:</strong> Si estas investigando estos tipos de temas seguramente debes de estar fuera de tu "zona de confort" y dentro de tu "zona de aprendizaje", disfruta ese proceso de aprender y comparte tu conocimiento con los demás.
							<p>Esto último tiene una serie de beneficios que te dejo de tarea investigar.</p>
						</li>
					</ol>
				</section>
				<section>
					<Title h={2}>Conclusión</Title>
					<p>En este blog vimos muchos temas, por eso intentaré hacer sólo una breve conclusión de lo que vimos.</p>
					<p>Para poder encontrar tu pasión (Si en realidad es lo que quieres) debes de tener el autoconocimiento suficiente y experimentar.</p>
					<p>Si todavía no tienes muy en claro qué es lo que te gusta, debes de salir de tu zona de confort, debes de experimentar y probar cosas nuevas.</p>
					<p>Lo último, la pasión es tu motor, no es algo que quieras encontrar, no te obsesiones por encontrar o descubrir tu pasión, si es cierto que existen preguntas que te pueden ayudar y encontrar lo que te gusta, pero la pasión tienes que vivirla, la pasión la debes de llevar contigo en todo lo que haces.</p>
					<blockquote>Vive con pasión, no esperes a encontrarla.</blockquote>
				</section>
				<Button onClick={() => navigate(url)}>Regresar</Button>
			</article>
			<Progress />
			<Footer />
		</main>
	);
};

export default PassionPost;
