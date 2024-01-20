import { lazy } from 'react';
const Gallery = lazy(() => import('../../../src/components/Gallery/Gallery'));
import { Container, GalleryTitle } from './Main.styled';
import contentData from '../../helpers/language';


const Main = ({language}) => {

    return  <main>
                <section>
                    <Container>
                        <GalleryTitle>{contentData.galleryTitle[language]}</GalleryTitle>
                        <Gallery language={language}/>
                    </Container>
                </section> 
            </main>
}

export default Main;