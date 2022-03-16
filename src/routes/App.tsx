import * as React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { LandingLayout, Loader, PostLayout } from "components";

const Home = React.lazy(() => import("pages/index"));

const Development = {
	confort: {
		page: "Confort",
		route: "como-salir-de-tu-zona-de-confort",
		topics: [
			"¿Qué es la zona de confort?",
			"Dificultades al intentar salir de nuestra zona de confort",
			"¿Es  importante salir de nuestra zona de confort?",
			"El orden y el caos",
			"Conquista tu zona de confort",
			"Rompe el patrón",
			"Conclusión",
		],
	},
	passion: {
		page: "Passion",
		route: "como-encontrar-la-pasion-de-tu-vida",
		topics: [
			"¿Qué es la pasión realmente?",
			"Autoconocimiento y acción",
			"¿Qué hacer si no tengo claro qué es lo que me gusta?",
			"Extra y consejos",
			"Conclusión",
		],
	},
};

type Posts = keyof typeof Development;

interface Module {
	name: string;
	route: string;
	page: string;
	posts: Array<Posts>;
}

const Modules: Array<Module> = [
	{
		name: "Desarrollo Personal",
		route: "desarrollo-personal",
		page: "Development",
		posts: ["confort", "passion"],
	},
	// {
	// 	name: "Tecnología",
	// 	route: "tecnologia",
	// 	page: "Technology",
	// },
	// {
	// 	name: "Salud",
	// 	route: "salud",
	// 	page: "Health",
	// }
];

const NoMatch = () => {
	const navigate = useNavigate();

	React.useEffect(() => {
		alert(`La página '${window.location.pathname}' está en creación.`);
		navigate("/");
	});

	return null;
};

const App = () => {
	return (
		<BrowserRouter>
			<React.Suspense fallback={<Loader />}>
				<a className="skip-to-content" href="#contenido">Saltar al contenido</a>
				<Routes>
					<Route path="/" element={<LandingLayout />}>
						<Route index element={<Home />} />
						{Modules.map((module) => {
							const element = React.createElement(
								React.lazy(() => import(`pages/${module.page}`)),
								{ route: module.route }
							);

							return <Route path={`/${module.route}`} element={element} key={module.route} />;
						})}
					</Route>
					{Modules.map((module) => {
						return module.posts.map((post) => {
							const element = React.createElement(PostLayout, {
								module: { name: module.name, route: module.route },
								topics: Development[post].topics,
							});
							const postElement = React.createElement(
								React.lazy(() => import(`pages/${module.page}/${Development[post].page}`)),
								{ url: module.route }
							);

							return (
								<Route path={`/${module.route}`} element={element} key={post}>
									<Route path={`${Development[post].route}`} element={postElement} />
								</Route>
							);
						});
					})}
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</React.Suspense>
		</BrowserRouter>
	);
};

export default App;
