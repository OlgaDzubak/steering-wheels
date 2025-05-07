import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import contentData from '../../helpers/language';
import { getCategories, getPhotos } from '../../api_operations/api_operations';
import Menu from '../Menu/Menu';
import Gallery from '../Gallery/Gallery';
import FsLightbox from 'fslightbox-react';
import { ThreeDots } from 'react-loader-spinner';
import { Loader } from '../Loader/Loader.styled';
import { Container, GalleryTitle } from './Main.styled';

const Main = () => {
  
  const { language } = useContext(GlobalContext);
  
  const [$categories, set$Categories] = useState([]);
  const [$photos, set$Photos] = useState([]);
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [categoriesIsEmpty, setCategoriesIsEmpty] = useState(true);
  const [photosIsEmpty, setPhotosIsEmpty] = useState(true);
  const [lightboxController, setLightboxController] = useState({toggler: false, slide: 1});


  useEffect(()=>{
    
    const abortCtrl = new AbortController();

    const fetchCategories = async () => {

      try {
        setisLoading(true);
        setCategoriesIsEmpty(true);
        setPhotosIsEmpty(true);
        const {data} = await getCategories(language, abortCtrl);

        if (data.length === 0)  {
          setCategoriesIsEmpty(true) 
        } else {
          setCategoriesIsEmpty(false);
        }
        data.unshift(contentData.all[language]);
        set$Categories(data);

      } catch (error) {
        if (!abortCtrl.signal?.aborted) {
          console.log(error.message);
        }
      }finally{
        setisLoading(false);
      }
    }
    fetchCategories();

    return ()=>{
      if (abortCtrl){
        abortCtrl.abort();
      }
    }

  }, [language]);

  useEffect(()=>{
    
    const abortCtrl = new AbortController();

    const fetchPhotos = async () => {

      try {
        setisLoading(true);
        setPhotosIsEmpty(true);
        const category = ($categories[activeCategoryIdx] === contentData.all[language]) ? "" : $categories[activeCategoryIdx];
        const {data} = await getPhotos(language, category, abortCtrl);

        if (data.length === 0)  {
          setPhotosIsEmpty(true) 
        } else {
          setPhotosIsEmpty(false) 
        }

        set$Photos(data);

      } catch (error) {
        if (!abortCtrl.signal?.aborted) {
          console.log(error.message);
        }
      }finally{
        setisLoading(false);
      }
    }
    fetchPhotos();

    return ()=>{
      if (abortCtrl){
        abortCtrl.abort();
      }
    }

  }, [$categories, activeCategoryIdx]);


  function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
  }
  
  const handleMenuItemClick = ({target}) => {

    const category = target.textContent;

    setActiveCategoryIdx($categories.indexOf(category));
  }

    return  <main>
                <section>
                  <Container>
                      <GalleryTitle>{ contentData.galleryTitle[language] }</GalleryTitle>                        

                        { (!categoriesIsEmpty) &&  <Menu  
                                                      language={language} 
                                                      categories={$categories}
                                                      activeIdx={activeCategoryIdx} 
                                                      onClick={handleMenuItemClick}>
                                                   </Menu> }

                        { (!photosIsEmpty) && <>
                                                <Gallery  photos={$photos} 
                                                          onGalleryItemClick={openLightboxOnSlide} />
                                              
                                                <FsLightbox
                                                  toggler={lightboxController.toggler}
                                                  slide={lightboxController.slide}
                                                  sources={$photos.map((item) => item.photo_url)}
                                                  customAttributes={$photos.map((item) => {return {alt: item[contentData.descriptionField[language]]}})}
                                                />
                                               
                                              </> }

                        { isLoading &&  <Loader>
                                            {' '} 
                                            <ThreeDots color="var(--text-color)" width="60" />
                                        </Loader> }
          
                  </Container>
                </section> 
            </main>
}

export default Main;