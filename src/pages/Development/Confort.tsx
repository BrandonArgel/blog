import * as React from "react";

import Aside from "components/Aside";
import Footer from 'components/Footer';
import Progress from "components/Progress";
import Title from "components/Title";

import styles from "../index.module.scss";

const module = {name: "Desarrollo Personal", url: "/desarrollo-personal"}
const topics = [{name: 'adwa', id: 'aa'}]

const Home = () => {
	return (
		<>
      <Aside module={module} topics={topics} />
			<main className={styles.main}>
				<Title>¿Cómo salir de tu zona de confort?</Title>
			</main>
      <Progress />
      <Footer />
		</>
	);
};

export default Home;
