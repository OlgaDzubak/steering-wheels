
import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
const HomePage = lazy(() => import('../src/pages/HomePage'));
import ErrorPage from './pages/ErrorPage';

function App() {
  
  return  <Routes>
            <Route  path ="/" element={ <HomePage />  }/>
            <Route  path="*"  element={ <ErrorPage /> } />
          </Routes>
};

export default App;
