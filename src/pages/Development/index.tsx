import * as React from "react";
import { Link } from "react-router-dom";

import { Slideshow, Slide } from "components/Slideshow";
import Title from "components/Title";

import Confort from "assets/images/confort/banner.jpg";
import Passion from "assets/images/passion/banner.jpg";

const Home = () => {
	return (
		<>
			<Title>Desarrollo personal</Title>
			<Slideshow speed={400}>
				<Slide>
					<Link to="/desarrollo-personal/como-salir-de-tu-zona-de-confort">
						<img src={Confort} alt="Zona de confort" />
						<Title h={4}>¿Cómo salir de tu zona de confort?</Title>
					</Link>
				</Slide>
				<Slide>
					<Link to="/encontrar-tu-pasion-de-tu-vida">
						<img src={Passion} alt="La pasión de tu vida" />
						<Title h={4}>¿Cómo encontrar la pasión de tu vida?</Title>
					</Link>
				</Slide>
				<Slide>
					<Link to="/encontrar-tu-pasion-de-tu-vida">
						<img src={Passion} alt="La pasión de tu vida" />
						<Title h={4}>¿Cómo encontrar la pasión de tu vida?</Title>
					</Link>
				</Slide>
				<Slide>
					<Link to="/encontrar-tu-pasion-de-tu-vida">
						<img src={Passion} alt="La pasión de tu vida" />
						<Title h={4}>¿Cómo encontrar la pasión de tu vida?</Title>
					</Link>
				</Slide>
			</Slideshow>
		</>
	);
};

export default Home;
