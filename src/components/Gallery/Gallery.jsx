import { useEffect, useState } from 'react';
import getPhotos from '../../api_operations/getPhotos';
import GalleryItem from "../GalleryItem/GalleryItem"


export const Gallery = () => {
  const [photos, setPhotos] = useState([{"_id":"1111",  "name":"kjfkrjf", "photo_url":"https://res.cloudinary.com/dxvnh0oip/image/upload/v1703542581/steering-wheels/Photo_1_bikpmi.png", "photo_description":"flklgklr", "material":"leather/"}]);
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
              photos.map( ({_id ,photo_url, photo_description}) => { 
                return <GalleryItem url={photo_url} alt={photo_description} key={_id}/>
              } ) 
            }
          </ul>
};

export default Gallery;