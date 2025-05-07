import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import contentData from '../../helpers/language';
import GalleryItem from "../GalleryItem/GalleryItem";
import {Gallery_ul} from '../Gallery/Gallery.styled';

const Gallery = ({ photos, onGalleryItemClick}) => {
  
  const { language } = useContext(GlobalContext);

  return  <Gallery_ul>  { photos.map((item, idx) => { 
            return <GalleryItem 
                          _id={item._id} 
                          url={item.photo_url_small} 
                          alt={item[contentData.descriptionField[language]]} 
                          key={item._id}
                          onGalleryItemClick = {()=>onGalleryItemClick(idx+1)}
                  />})
            }
          </Gallery_ul>
};

export default Gallery;
