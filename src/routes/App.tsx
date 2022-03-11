import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/index";
import Development from "pages/Development";
import Confort from "pages/Development/Confort";

import { Layout, PostLayout } from "components/Layout";
import Loader from "components/loader";

const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="desarrollo-personal" element={<Development />} />
					</Route>
					<Route path="/desarrollo-personal" element={<PostLayout />}>
						<Route path="como-salir-de-tu-zona-de-confort" element={<Confort />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
