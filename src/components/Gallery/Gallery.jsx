import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
import {Gallery_ul} from '../Gallery/Gallery.styled';
import getPhotos from '../../api_operations/getPhotos';
import GalleryItem from "../GalleryItem/GalleryItem";
import Paginator from "../Paginator/Paginator";

export const Gallery = () => {

  const [photos, setPhotos] = useState([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [perPage] = useState(9);
  const [IsLoading, setIsLoading] = useState(false);
  const [IsEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
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

                              <Gallery_ul>  { photos.map( ({ _id, photo_url, photo_description }) => { 
                                      return <GalleryItem _id={_id} url={photo_url} alt={photo_description} key={_id} />})
                                    }
                              </Gallery_ul>

                              <Paginator pageCount={Math.ceil(total/perPage)} handlePageClick={onClickPaginator} />

                            </>

                          : <></>
              }

              { 
                (IsLoading) &&  (<Loader>{' '} <ThreeDots color="var(--text-color)" width="60" /></Loader> )  
              }
          </>
          
};

export default Gallery;