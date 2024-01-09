import { lazy } from 'react';
const Gallery = lazy(() => import('../../../src/components/Gallery/Gallery'));
import { Container } from './Main.styled';


const Main = ({language}) => {

    return  <main>
                <Container>
                    <Gallery language={language}/>
                </Container>
            </main>
}

export default Main;