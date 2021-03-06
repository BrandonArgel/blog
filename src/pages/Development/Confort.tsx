import * as React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Image, Information, Title } from "components";

import Banner from "assets/images/confort/banner.webp";
import Unknown from "assets/images/confort/unknown.webp";
import LowResistance from "assets/images/confort/lowresistance.webp";
import OutOfConfort from "assets/images/confort/outofconfort.webp";
import Resilience from "assets/images/confort/resilience.webp";
import FirstStep from "assets/images/confort/firststep.webp";
import ConfortZone from "assets/images/confort/confortzone.webp";

import styles from "components/Aside/index.module.scss";
interface Props {
	url: string;
}

const Confort: React.FC<Props> = ({ url }) => {
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
					// Main.scrollTo(0, el.offsetTop - 60);
				}
			}
			, 0);
		}
	}, []);

	return (
		<article>
			<section>
				<Title>??Qu?? es la zona de confort?</Title>
				<Image src={Banner} alt="Zona de confort" size="large" lazy={false} />
				<p>
					Para comenzar debemos de entender <strong>??Qu?? es la zona de confort?</strong> tambi??n
					conocida como <strong>zona de comodidad</strong> y algunos puntos importantes. Si no
					sabemos qu?? es la zona de confort, no sabremos c??mo salir de ella.
				</p>
				<blockquote>
					La zona de confort es un estado mental donde nos encontramos c??modos con nuestra vida
					actual, por nuestras aspiraciones cubiertas y sin presiones.
				</blockquote>
				<p>
					En t??rminos de la psicolog??a es una zona mental donde no se tiene sentido de riesgo, es un
					estado/lugar en que los psic??logos recomiendan estar para controlar situaciones de estr??s
					o desorientaci??n.
				</p>
				<p>
					En otras palabras, la zona de confort nos sit??a en una burbuja que nos protege de lo
					desconocido e inusual. Y sigues haci??ndolo por miedo a perder tu estabilidad.
				</p>
				<p>
					A simple vista la zona de confort puede parecer inofensiva, pero no todo es bueno. Dentro
					de la zona de confort tambi??n hay cosas negativas que no nos gustan (una relaci??n de
					pareja, un trabajo, malas h??bitos adquiridos, etc.)
				</p>
				<Information>
					Bajo circunstancias como: Mucho estr??s, si te exiges demasiado, etc. Es mejor quedarnos en
					nuestra zona de confort.
				</Information>
				<p>
					Permanecer en nuestra zona de confort es se??al de conformismo, ignorancia, falta de
					confianza, miedo, falta de aspiraciones o por falta de ambiciones.
				</p>
				<p>
					La zona de confort tambi??n es un espacio de calma donde podemos descansar y reponernos
				</p>
			</section>
			<section>
				<Title h={2}>Dificultades al intentar salir de nuestra zona de confort</Title>
				<p>
					Existen muchas razones y estas pueden variar para cada pesona, pero, para entender bien
					todo, debemos de recurrir a un poco de historia.
				</p>
				<Image src={Unknown} alt="Miedo a lo desconocido" size="medium" side="right" />
				<p>
					<span>El miedo a lo desconocido:</span> Nuestro cerebro est?? programado para sobrevivir y
					se podr??a decir que hoy en d??a esta desactualizado, hasta el d??a de hoy todav??a seguimos
					con muchas caracter??sticas que ten??an nuestros cerebros hace miles de a??os. Una de esas
					caracter??sticas es el miedo a lo desconocido, si te das cuenta este rasgo existe tambi??n
					en otros animales, esto ayud?? a que no nos extinguieramos hace muchos a??os como otras
					especies.
				</p>
				<Image src={LowResistance} alt="El camino de menor resistencia" size="medium" side="right" />
				<p>
					<span>El camino de menor resistencia:</span> Este punto no es de historia, mas bien es de
					evoluci??n, los humanos se han ido adaptando para siempre tomar el camino de menor
					resistencia, hacer lo m??s f??cil, lo que exija mejos esfuerzo.
				</p>
				<p>
					Estos dos puntos anteriores fueron de mucha utilidad para nosotros, lo m??s probable es que
					por ellos no nos extinguieramos y tambi??n hayamos creado tantas cosas y avanzado tan
					r??pido como especie, pero tambi??n son los principales culpables de que no salgas de tu
					zona de confort, adem??s existen otras razones que nos impiden salir de nuestra zona de
					confort.
				</p>
				<ul>
					<li>
						<strong>Permite desarrollar nuevas habilidades, amistades y ponerse a prueba. </strong>
						Salir de nuestra zona de confort tambi??n es un reto, que si logramos superar tambi??n
						obtendremos nuevas habilidades, conocimientos, amistades, experiencias, entre muchas
						otras cosas.
					</li>
					<li>
						<strong>Ayuda a prepararte frente a las dificultades. </strong>
						Aprendemos miles de herramientas para hacer frente a imprevistos que surjan.
					</li>
					<li>
						<strong>Aumenta la seguridad en nosotros mismos. </strong>
						Cuando uno se enfrenta a un reto y lo supera cree un poco m??s en s?? mismo, adquiere
						valent??a y seguridad para dar el siguiente paso e ir creciendo.
					</li>
					<li>
						<strong>Estimula nuestro af??n de superaci??n. </strong>
						Cuando conseguimos salir y ampliar nuestra zona de confort la satisfacci??n personal es
						muy grande y eso nos hace ir a m??s y crecer como personas.
					</li>
					<li>
						<strong>Fomenta el crecimiento personal. </strong>
						Cuando nos damos cuenta de que somos capaces de lograr lo que nos daba miedo, resulta
						una aportaci??n muy valiosa a nuestra personalidad. La carga de experiencias nos acompa??a
						en nuestro camino para explorar m??s all?? de nuestra nueva zona de confort.
					</li>
				</ul>
			</section>
			<section>
				<Title h={2}>??Es importante salir de nuestra zona de confort?</Title>
				<Image src={OutOfConfort} alt="Fuera de la zona de confort" size="medium" side="left" />
				<p>
					Quien sale de la zona de confort no tiene miedo de arriesgarse y, muchas veces, se
					sorprende con lo que alcanza. Es claro que cada persona se adapta de forma diferente a una
					misma situaci??n, pero el simple hecho de arriesgar ya proporciona m??s conocimiento.
				</p>
				<p>
					Salir de nuestra zona de confort nos otorga varios beneficios, que tal vez no ser??n
					notorios a primera vista, pero ser??n cosechados conforme avance el tiempo y descubras
					nuevas cosas.
				</p>
				<ul>
					<li>
						<strong>Permite desarrollar nuevas habilidades, amistades y ponerse a prueba. </strong>
						Salir de nuestra zona de confort tambi??n es un reto, que si logramos superar tambi??n
						obtendremos nuevas habilidades, conocimientos, amistades, experiencias, entre muchas
						otras cosas.
					</li>
					<li>
						<strong>Ayuda a prepararte frente a las dificultades. </strong>
						Aprendemos miles de herramientas para hacer frente a imprevistos que surjan.
					</li>
					<li>
						<strong>Aumenta la seguridad en nosotros mismos. </strong>
						Cuando uno se enfrenta a un reto y lo supera cree un poco m??s en s?? mismo, adquiere
						valent??a y seguridad para dar el siguiente paso e ir creciendo.
					</li>
					<li>
						<strong>Estimula nuestro af??n de superaci??n. </strong>
						Cuando conseguimos salir y ampliar nuestra zona de confort la satisfacci??n personal es
						muy grande y eso nos hace ir a m??s y crecer como personas.
					</li>
					<li>
						<strong>Fomenta el crecimiento personal. </strong>
						Cuando nos damos cuenta de que somos capaces de lograr lo que nos daba miedo, resulta
						una aportaci??n muy valiosa a nuestra personalidad. La carga de experiencias nos acompa??a
						en nuestro camino para explorar m??s all?? de nuestra nueva zona de confort.
					</li>
				</ul>
			</section>
			<section>
				<Title h={2}>El orden y el caos</Title>
				<p>
					El profesor <strong>Jordan Peterson</strong> habla mucho sobre el orden y el caos. Dice
					que el orden y el caos conviven, el humano para alcanzar sus objetivos debe de tener un
					pie en el orden. Pero ??A qu?? se refiere con el orden y el caos?
				</p>
				<p>
					<strong>El orden:</strong> Son tus rutinas, tus h??bitos, tu d??a a d??a, lo que te mueve
					hacia adelante, es la sistematizaci??n de procesos, todo lo conocido, es esperar lo mismo
					cada d??a, todo esto crea diferentes rutinas que al final te crear??n diferentes procesos
					que al final te crear??n los mismos resultados que esperas, sin orden no podr??as alcanzar
					tus objetivos a largo plazo.
				</p>
				<p>Pero tambi??n debes de tener otro pie en el caos, y ??Qu?? es el caos?</p>
				<p>
					<strong>El caos:</strong> El caos es todo lo desconocido, el caos es lo nuevo, es el
					cambio, es todo aquello que nos produce cierto miedo e inestabilidad.
				</p>
				<p>
					La idea es que est??s un punto medio, que encuentres un balance entre el orden y el caos de
					tu vida, y que cuando entres en caos consigas ordenarlo y as?? ir dominando todo lo nuevo.
				</p>
				<Image src={Resilience} alt="Resiliencia" size="medium" side="left" />
				<p>
					El ser humano es antifragil, y con antifr??gil me refiero a que no solo es resistente, sino
					que cada vez que recibe un golpe o da??o, o supera alguna situaci??n adversa se hace m??s
					fuerte, es resiliente, esto es lo que nace del caos, el balance entre medio, es donde nace
					la virtud.
				</p>
				<p>
					No es bueno es tar m??s del lado del caos que del orden, si es as??, tienes que ordenar tu
					caos, o si est??s m??s del lado del orden tienes que salir de tu zona de confort y de tu
					zona de miedo, para que puedas crecer como persona, es muy importante crear este balance,
					existe gente que se encuentra
				</p>
			</section>
			<section>
				<Title h={2}>Conquista tu zona de confort</Title>
				<Image src={FirstStep} alt="Primeros pasos para salir de tu zona de confort" size="large" />
				<p>
					Cada vez que sales de tu zona de confort en realidad lo que est??s haciendo es expandir tu
					zona de confort, nuestra habitaci??n puede ser nuestra zona c??moda, nuestra casa, nuestro
					vecindario, incluso nuestra ciudad o pa??s, puedes hacer de todo tu zona de confort.
				</p>
				<p>
					Expandir tu zona de confort har?? que de repente aparezcan nuevas oportunidades, personas,
					amistades, nuevos conocimientoS, comienzas a hacer mas cosas que te dan miedo, y cuanto
					m??s haces, m??s construyes, y cuanta m??s base s??lida tienes, m??s empiezas a crecer por que
					tienes m??s recursos.
				</p>
			</section>
			<section>
				<Title h={2}>Rompe el patr??n</Title>
				<Image src={ConfortZone} alt="Zona de confort" size="medium" side="left" />
				<p>
					Leer un blog no har?? nada en tu vida si no lo pones en pr??ctica, le??ste este blog hasta
					ac?? por que quieres cambiar, por que quieres salir de tu zona de confort, pero de nada
					sirve todo esto si no rompes este patr??n, de nada sirve la informaci??n si no la pones en
					pr??ctica, haz algo que aunque parezca f??cil, nunca hayas hecho, solo falta una peque??a
					rotura en el patr??n para empezar a desencadenar una serie de eventos, y te dar??s cuenta
					que salir de tu zona de confort es fascinante, pero todo depende de ti,{" "}
					<strong>??Necesitas m??s caos en tu vida?</strong> o <strong>??Necesitas m??s orden?</strong>
				</p>
				<p>
					Esta es tu llamada a la acci??n, para salir de la zona de confort no hace falta realizar
					grandes cambios en tu vida. Los desencadenantes que puedes hacer ahora mismo para que
					descubras esa parte del mundo que tal vez no sab??as que estaba ah??, o que nunca te hab??as
					atrevido a explorar, son las siguientes.
				</p>
				<ol>
					<li>
						<strong>No te quedes c??modo:</strong> No hagas tu rutina diaria.
					</li>
					<li>
						<strong>Hazlo poco a poco:</strong> Comienza con peque??os cambios, como cosas que
						normalmente no har??as:
						<ul>
							<li>Si eres t??mido o introvertido, toma iniciativa e invita a tus amigos.</li>
							<li>Cambia tu actitud ante las personas que te rodean y la vida.</li>
							<li>Realiza actividades en las que necesites creatividad.</li>
							<li>Hablarle a alg??n o alguna desconocid@ en la calle.</li>
							<li>Hablarle a esa persona que tanto te gusta.</li>
							<li>Experimenta cosas nuevas todos los d??as</li>
							<li>Intenta superar tus miedos y temores.</li>
							<li>Realiza actividades independientes.</li>
							<li>Estudiar un nuevo idioma.</li>
							<li>Aprende algo nuevo.</li>
						</ul>
					</li>
					<li>
						<strong>S?? flexible:</strong> Mantente abierto a nuevas actividades.
					</li>
					<li>
						<strong>Desaf??ate a ti mismo: </strong>
						Nadie ha alcanzado sus sue??os haciendo lo mismo toda su vida.
					</li>
					<li>
						<strong>Abre tu mente:</strong> Puedes ponerte creativo y animarte a hacer cosas nuevas.
					</li>
				</ol>
				<blockquote>No dejes para ma??ana lo que puedes hacer hoy.</blockquote>
			</section>
			<section>
				<Title h={2}>Conclusi??n</Title>
				<p>
					Salir de tu zona de confort es de las mejores cosas que te pueden pasar, le da m??s emoci??n
					a tu vida, aprendes nuevas cosas, nuevas experiencias, etc.
				</p>
				<p>
					Una vez entiendes que tu miedo es mental y normal a todo lo desconocido, el miedo no es
					por la situaci??n que te ocurrir?? en el futuro, cambia tu marco mental, s??lo necesitas
					poner un poco de tu parte para lograrlo.
				</p>
				<p>
					Debes de tener un equilibrio entre tu <strong>orden</strong> y tu <strong>caos</strong>{" "}
					para salir de tu zona de confort.
				</p>
				<p>
					Identifica si necesitas ordenar el caos de tu vida o si debes salir m??s de tu zona de
					comodidad.
				</p>
			</section>
			<Button onClick={() => navigate(`/${url}`)}>Regresar</Button>
		</article>
	);
};

export default Confort;
