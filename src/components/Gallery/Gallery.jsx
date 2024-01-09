import { useEffect, useState } from 'react';
import contentData from '../../helpers/language';
import { Loader } from '../Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
import {Gallery_ul} from '../Gallery/Gallery.styled';
import getPhotos from '../../api_operations/getPhotos';
import GalleryItem from "../GalleryItem/GalleryItem";
import Paginator from "../Paginator/Paginator";


const Gallery = ({language}) => {

  const [photos, setPhotos] = useState([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [perPage] = useState(window.innerWidth < 768 ? 5 : (window.innerWidth < 1100 ? 6 : 9));
  const [IsLoading, setIsLoading] = useState(false);
  const [IsEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    console.log(" Gallery useEffect");
    const fetchPhotos = async () => {
      try {
          
          setIsLoading(true);

          const {data, totalCount} = await getPhotos(page, perPage);

          if (data.length === 0) {
              setIsEmpty(true);
          } else {
              setIsEmpty(false);
          }

          setTotal(totalCount);
          setPhotos(data);

      } catch (error) { 
          console.error('Error fetching photos:', error);
      } finally {
          setIsLoading(false); 
      }
    };
    fetchPhotos();
  }, [page]);
  
  const onClickPaginator = ({selected}) => { 
        const chosenPage = selected ;
        if (chosenPage < Math.ceil(total/perPage)) {
            setPage(chosenPage+1);
        }
  };

  
  return  <>
              { (!IsEmpty)  ?
                            <>
                            
                              <Gallery_ul>  { photos.map((item) => { 
                                      return <GalleryItem _id={item._id} url={item.photo_url} alt={item[contentData.descriptionField[language]]} key={item._id} />})
                                    }
                              </Gallery_ul>

                              <Paginator pageCount={Math.ceil(total/perPage)} handlePageClick={onClickPaginator} isLoading={IsLoading}/>

                            </>

                          : <></>
              }

              { 
                (IsLoading) &&  (<Loader>{' '} <ThreeDots color="var(--text-color)" width="60" /></Loader> )  
              }
          </>
          
};

export default Gallery;
