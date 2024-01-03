import { lazy } from 'react';
const Gallery = lazy(() => import('../../../src/components/Gallery/Gallery'));
import { Container } from './Main.styled';

export const Main = () => {

    return  <main>
                <Container>
                    <Gallery/>
                </Container>
            </main>
}