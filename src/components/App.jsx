import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Catalogue = lazy(() => import('../pages/Catalogue/Catalogue'));
const Favorites = lazy(() => import('../pages/Favorites'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route
          path="*"
          element={
            <Suspense>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};
