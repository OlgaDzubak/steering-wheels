import { Route, Routes} from 'react-router-dom';
import { Container } from './components/Container/Container.styled';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';


function App() {
  return  <Container>

              <Header/>

              <Routes>
              
                <Route path="/" element={ <Main/> } />

              </Routes>

              <Footer/>
              
          </Container>
}

export default App;
