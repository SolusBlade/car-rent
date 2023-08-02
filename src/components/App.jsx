import HomePage from 'pages/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import CatalogPage from 'pages/CatalogPage';
import { useEffect, useState } from 'react';
import { getAdvertsApi } from 'services/connectoinsApi';
import FavoritesPage from 'pages/FavoritesPage';

const App = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
      getAdvertsApi().then(r => setAdverts(r))
  }, [])
  
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/catalog"
          element={<CatalogPage adverts={adverts} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage adverts={adverts} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
