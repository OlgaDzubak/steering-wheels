import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import ErrorPage from './pages/ErrorPage';
const HomePage = lazy(() => import('../src/pages/HomePage'));


function App() {

  return <Routes>
          <Route path ="/" element={<HomePage />}/>
          <Route path="*" element={<ErrorPage />}/>
         </Routes>
};

export default App;
