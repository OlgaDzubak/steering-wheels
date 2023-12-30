import { useEffect, useState } from 'react';
import getPhotos from '../../api_operations/getPhotos';


export const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(9);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
          setIsLoading(true);
          const {photos, total} = await getPhotos(page, perPage);
          setPhotos([...Object.entries(photos)]);
      } catch (error) { 
          console.error('Error fetching photos:', error);
      } finally {
          setIsLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  return  <ul>
            { 
              photos.map( ({photo_url, photo_description}) => { 
                return <GalleryItem url={photo_url} alt={photo_description}/>
              } ) 
            }
          </ul>
};

export default Gallery;