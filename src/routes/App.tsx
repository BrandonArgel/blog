import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout, PostLayout } from "components/Layout";
import Loader from "components/loader";

const Home = React.lazy(() => import("pages/index"));
const Development = React.lazy(() => import("pages/Development"));
const Confort = React.lazy(() => import("pages/Development/Confort"));
const Passion = React.lazy(() => import("pages/Development/Passion"));

const App = () => {
	return (
		<BrowserRouter>
			<React.Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="desarrollo-personal" element={<Development />} />
					</Route>
					<Route path="/desarrollo-personal" element={<PostLayout />}>
						<Route path="como-salir-de-tu-zona-de-confort" element={<Confort />} />
						<Route path="como-encontrar-la-pasion-de-tu-vida" element={<Passion />} />
					</Route>
				</Routes>
			</React.Suspense>
		</BrowserRouter>
	);
};

export default App;
