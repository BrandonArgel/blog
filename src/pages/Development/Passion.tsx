import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Image, Title } from "components";

import Banner from "assets/images/passion/banner.webp";
import Brainstorming from "assets/images/passion/brainstorming.webp";
import LovePassion from "assets/images/passion/lovepassion.webp";
import PasionWoman from "assets/images/passion/passionwoman.webp";
import PassionMan from "assets/images/passion/passionman.webp";
import Time from "assets/images/passion/time.webp";

import styles from "components/Aside/index.module.scss";
interface Props {
	url: string;
}

const Passion: React.FC<Props> = ({ url }) => {
	const navigate = useNavigate();

	React.useEffect(() => {
		const Main = document.querySelector("main") as HTMLElement;
		const Sections = Main.querySelectorAll("section") as NodeListOf<HTMLElement>;

		Array.from(Sections).forEach((section, i) => {
			section.id = `${i + 1}`;
		});

		const Summary = document.getElementById("summary") as HTMLElement;
		const Titles = Main.querySelectorAll("h1, h2") as NodeListOf<HTMLElement>;
		const Items = Summary.querySelectorAll("a") as NodeListOf<HTMLElement>;

		let current = 0;
		let prev = 0;

		const updateAside = () => {
			Array.from(Items).forEach((item, i) => {
				if (i <= current) {
					const element = item.firstChild as HTMLElement;
					element.classList.add(styles.active);
				} else {
					const element = item.firstChild as HTMLElement;
					element.classList.remove(styles.active);
				}
			});
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						prev = current;
						current = Array.from(Titles).indexOf(entry.target as HTMLElement);
						updateAside();
					} else {
						const index = Array.from(Titles).indexOf(entry.target as HTMLElement);
						if (index === current) {
							if (prev > current) {
								prev = current;
								current++;
							} else {
								prev = current;
								current--;
							}
							updateAside();
						}
					}
				});
			},
			{
				root: Main,
				rootMargin: "60px 0px 0px 0px",
				threshold: 1,
			}
		);

		Titles.forEach((title) => observer.observe(title));

		if (window.location.hash) {
			const id = window.location.hash.substring(1);
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView();
				}
			}
			, 0);
		}
	}, []);

	return (
		<article>
			<section>
				<Title>??C??mo encontrar la pasi??n de tu vida?</Title>
				<Image src={Banner} alt="La pasi??n" size="large" lazy={false} />
				<p>
					Seguramente si eres como yo te habr??s preguntado{" "}
					<strong>??Cu??l es la pasi??n de mi vida?</strong> Y es que yo por mucho tiempo me hab??a
					obsesionado con encontrar la pasi??n de mi vida y en este blog encontrar??s todas las cosas
					que descubr?? y que me ayudaron a encontrar la pasi??n de mi vida.
				</p>
				<p>
					Para responder esta pregunta, lo primero que debemos hacer, es entender qu?? significa o
					qu?? es pasi??n realmente.
				</p>
				<p>
					La pasi??n es una <strong>intensa afici??n</strong> y <strong>emoci??n</strong> que sientes
					hacia algo, es una inclinaci??n muy fuerte hacia algo o alguien, puede encontrarse en
					aquellas cosas y <strong>actividades que te causan deleite</strong>,{" "}
					<strong>placer</strong> y que simplemente <strong>adoras hacer</strong>, algo que te
					"apasiona".
				</p>
			</section>
			<section>
				<Title h={2}>Autoconocimiento y acci??n</Title>
				<Image src={Time} alt="El tiempo, nuestro bien m??s valioso" size="small" side="left" />
				<p>La pasi??n no siempre se presenta de forma evidente en nuestras vidas.</p>
				<p>
					De hecho, la mayor??a de personas necesitan pensar en ello durante meses e incluso a??os.
				</p>
				<p>Existen diferentes maneras para encontrar la pasi??n de tu vida o acelerar el proceso.</p>
				<blockquote>
					La calidad de nuestras preguntas determina la calidad de nuestras vidas.{" "}
					<strong>??? John Miller</strong>
				</blockquote>
				<ol>
					<li>
						<strong>Lluvia de ideas:</strong> Para encontrar tu pasi??n debes de prestar atenci??n a
						tu vida, tener en cuenta las cosas que te encantan, para esto puedes guiarte
						respondiendo una serie de preguntas:
						<ul>
							<Image src={Brainstorming} alt="Lluvia de ideas" size="super-small" side="right" />
							<li>??Si pudiera hacer algo por el resto de mi vida, qu?? ser??a?</li>
							<li>??Qu?? cosas me producen una gran satisfacci??n y alegr??a?</li>
							<li>??A qu?? me dedicar??a si el dinero no fuera un problema?</li>
							<li>??Qu?? me hace sentir bien conmigo mismo?</li>
							<li>??Qu?? me hace perder la noci??n del tiempo?</li>
							<li>??En qu?? utilizo mi tiempo libre?</li>
							<li>??Qu?? me gusta hacer?</li>
						</ul>
						<p>
							T??mate el tiempo que necesites para responderlas, y es muy importante que seas
							sincero.
						</p>
					</li>
					<li>
						<Image src={PasionWoman} alt="La pasi??n de tu vida" size="super-small" side="right" />
						<strong>Piensa en tus sue??os:</strong> Ahora tienes que escribir todas las cosas con las
						que alguna vez so??aste, o siempre so??aste hacer, pero no hiciste por falta de tiempo,
						dinero, porque te atemorizaba, porque no les ve??as la finalidad o por cualquier otra
						raz??n.
						<ul>
							<li>??Hay algo que desee hacer pero no hago por miedos relacionados con el dinero?</li>
							<li>??Hay algo que no me anim?? a probar porque me saca de mi zona de confort?</li>
							<li>??Hay algo que desee hacer pero no hago por alg??n otro miedo?</li>
							<li>??Qu?? es eso con lo que siempre so???? pero nunca hice?</li>
							<li>??Qu?? quer??a ser al crecer cuando era chico?</li>
							<li>??Tuve alguna vez un sue??o que abandon???</li>
						</ul>
						<p>
							T??mate el tiempo que necesites para responderlas, y de igual manera es muy importante
							que seas sincero.
						</p>
					</li>
					<li>
						<Image src={LovePassion} alt="Amar tu pasi??n" size="super-small" side="right" />
						<strong>Reconoce y distingue las cosas m??s importantes para ti:</strong> Una vez que
						hayas respondido estas preguntas seguramente tendr??s una mejor idea del tipo de cosas
						que ya te interesan y siempre quisiste probar. Ahora que tienes ese autoconocimiento
						podr??s descubrir con mayor facilidad cu??l es la pasi??n de tu vida.
						<p>
							Es posible que si eres muy joven, o por cualquier otro motivo a??n sigas sin ning??n
							indicio de cu??l podr??a ser la pas??on de tu vida (Esto me pas?? a m??) ??Pero no te
							preocupes! M??s adelante <strong>encontrar??s un truco infalible</strong> que no te
							puedes perder y tambi??n algo que necesitas saber acerca de la pasi??n.
						</p>
						<blockquote>
							Tocar una nota equivocada es insignificante, tocar sin pasi??n es inexcusable.
							<strong>??? Ludwig van Beethoven</strong>
						</blockquote>
					</li>
				</ol>
			</section>
			<section>
				<Title h={2}>??Qu?? hacer si no tengo claro qu?? es lo que me gusta?</Title>
				<p>
					Si todav??a no sabes que es lo que realmente te gusta es por que todav??a no has
					experimentado lo suficiente, la buena noticia es que esto se puede resolver f??cilmente.
				</p>
				<ul>
					<li>
						<strong>Date la oportunidad de educarte:</strong> Aprende nuevos temas de tu inter??s,
						con cursos, libros o lo que te guste.
					</li>
					<li>
						<strong>Prueba cosas nuevas:</strong> Practica nuevos deportes, explora tu lado
						art??stico, encuentra un nuevo hobby, sal de tu{" "}
						<Link to={`/${url}/como-salir-de-tu-zona-de-confort`} target="_blank">zona de confort</Link>.
					</li>
					<li>
						<strong>Investiga:</strong> Ad??ntrate en nuevos temas interesantes.
					</li>
					<li>
						<strong>Experimenta:</strong> No existe una f??rmula general para encontrar la pasi??n de
						tu vida, cada persona es ??nica y lo importante es que pruebes diferentes opciones y
						averig??es cu??les son las que te funcionan mejor a ti.
					</li>
					<li>
						<strong>Haz introspecci??n:</strong> Observa el interior de ti, y analisa todo lo que
						ocurre dentro de tu mente cuando estas realizando diferentes actividades para
						identificar si algo de lo que haces es apasionante para ti.
					</li>
					<li>
						<strong>Transforma tu pasi??n en un prop??sito claro y medible:</strong> Una vez que
						tengas claro aquello que posiblemente te apasiona, hay que saber aprovecharlo de manera
						estrat??gica. Lo mejor es recurrir a trazarte un prop??sito o meta 100% medible,
						clasificada bajo procesos y pasos concisos sobre lo que vas a realizar durante cada fase
						y los resultados a los que poco a poco planeas acercarte. Esto no solo va ayudarte a
						alcanzar tus metas, adem??s tendr??s m??s tiempo y espacio de reflexi??n y conexi??n para
						cultivar y aprovechar mejor aquello que te apasiona.
						<p>
							Ahora lo m??s posible ya tengas una idea de cu??l es tu pasi??n.{" "}
							<strong>??Felicitaciones!</strong> Siguiendo los consejos de este blog e investigando
							m??s ten por seguro que tendr??s una vida plena y te ir?? muy bien.
						</p>
						<p>
							Tambi??n es muy importante que disfrutes el proceso, cre??me que es muy largo y m??s si
							quieres ser una persona exitosa en la vida, necesitar??s mucha dedicaci??n, talento,
							perseverancia, disciplina, resiliencia y eso solo es el principio.
						</p>
					</li>
				</ul>
			</section>
			<section>
				<Title h={2}>Encontrar tu Pasi??n Instant??neamente</Title>
				<p>
					Pero... ??Y si despu??s de hacer todo lo anterior todav??a no tienes claro que es lo que
					quieres hacer?
				</p>
				<p>??No te preocupes! Es hora de la t??cnica infalible que te cont?? anteriormente.</p>
				<p>
					El mundo necesita gente que ame lo que hace, pero sobre todo, gente que se tome el tiempo
					necesario para descubrirlo.
				</p>
				<blockquote>
					El truco no consiste en hacer lo que te gusta, sino en que te guste lo que haces.{" "}
					<strong>??? Victor K??ppers</strong>
				</blockquote>
				<Image src={PassionMan} alt="La pasi??n de tu vida" size="large" />
				<p>
					Esto no es m??s que la introducci??n a esta secci??n, y continuar?? con otra frase muy
					reveladora que te dar?? la epifan??a adecuada para entender de lo que te estoy hablando:
				</p>
				<blockquote>
					La pasi??n es algo demasiado importante como para no tenerla, pero demasiado inconsistente
					como para estar constantemente persigui??ndola. (No persigas tu pasi??n, siempre ll??vala
					contigo) <strong>??? Mike Rowe</strong>
				</blockquote>
				<p>
					Y es que las personas que son m??s felices y viven su vida plenamente no esperan a
					encontrar su pasi??n, esas personas <strong>han puesto pasi??n en sus vidas</strong>, al
					princi??o puede sonar un poco redundante, pero esta frase cambi?? la percepci??n que ten??a
					sobre el mundo y la vida.
				</p>
				<p>
					Muchas personas viven esperando a encontrar su pasi??n y viven desanimados, o apagados
					hasta que la encuentran, tu no caigas en este error.
				</p>
				<p>Otra cosa, es importante recalcar la diferencia entre pasi??n y destino.</p>
				<p>
					<strong>Pasi??n:</strong> La pasi??n tienes que ponerla en todo lo que haces.
				</p>
				<p>
					<strong>Destino:</strong> Tu destino quiz??s tardar??s m??s en encontrarlo.
				</p>
				<p>
					Ahora te dejo una serie de preguntas que en realidad es opcional si las quieres contestar
					o no:
				</p>
				<ol>
					<li>
						??Como puedo contagiar de alegr??a a la gente con la que estoy trabajando/estudiando?
					</li>
					<li>??Como puedo hacer lo que estoy haciendo de la mejor manera posible?</li>
					<li>??Si mi vida fuera un libro c??mo quisiera que leyeran mi libro?</li>
					<li>??Como puedo mejorar como persona con lo que estoy haciendo?</li>
					<li>??Como puedo simplificar lo que estoy haciendo d??a a d??a?</li>
				</ol>
				<p>Y el consejo que te quer??a dar no era s??lo uno, son los siguientes:</p>
				<ol>
					<li>
						<strong>No persigas tu pasi??n, SIEMPRE ll??vala contigo, en todo lo que haces.</strong>
					</li>
					<li>
						<strong>Disfruta el proceso:</strong> Si estas investigando estos tipos de temas
						seguramente debes de estar fuera de tu "zona de confort" y dentro de tu "zona de
						aprendizaje", disfruta ese proceso de aprender y comparte tu conocimiento con los dem??s.
						<p>Esto ??ltimo tiene una serie de beneficios que te dejo de tarea investigar.</p>
					</li>
				</ol>
			</section>
			<section>
				<Title h={2}>Conclusi??n</Title>
				<p>
					En este blog vimos muchos temas, por eso intentar?? hacer s??lo una breve conclusi??n de lo
					que vimos.
				</p>
				<p>
					Para poder encontrar tu pasi??n (Si en realidad es lo que quieres) debes de tener el
					autoconocimiento suficiente y experimentar.
				</p>
				<p>
					Si todav??a no tienes muy en claro qu?? es lo que te gusta, debes de salir de tu zona de
					confort, debes de experimentar y probar cosas nuevas.
				</p>
				<p>
					Lo ??ltimo, la pasi??n es tu motor, no es algo que quieras encontrar, no te obsesiones por
					encontrar o descubrir tu pasi??n, si es cierto que existen preguntas que te pueden ayudar y
					encontrar lo que te gusta, pero la pasi??n tienes que vivirla, la pasi??n la debes de llevar
					contigo en todo lo que haces.
				</p>
				<blockquote>Vive con pasi??n, no esperes a encontrarla.</blockquote>
			</section>
			<Button onClick={() => navigate(`/${url}`)}>Regresar</Button>
		</article>
	);
};

export default Passion;
