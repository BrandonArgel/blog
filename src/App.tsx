import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home'

import Layout from 'components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;