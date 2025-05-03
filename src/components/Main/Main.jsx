import Gallery from '../Gallery/Gallery';
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