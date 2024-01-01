import { Route, Routes} from 'react-router-dom';
import { Container } from '../src/components/Container/Container.styled';
import { Header } from '../src/components/Header/Header';
import { Main } from '../src/components/Main/Main';
import { Footer } from '../src/components/Footer/Footer';


function App() {
  return  <Container>

              <Header/>

              <Routes>
              
                <Route index  element={ <Route redirectTo="/" component={ <Main/>} /> } />
              </Routes>

              <Footer/>
              
          </Container>
}

export default App;
