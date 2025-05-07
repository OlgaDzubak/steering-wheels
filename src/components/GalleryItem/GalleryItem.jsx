import { Item_li, Item_img, Item_P } from "./GalleryItem.styled";


const GalleryItem = ({url, alt, onGalleryItemClick}) => {
    
    return <Item_li onClick={onGalleryItemClick}>
            <Item_img src={url} alt={alt} width='400px' height='auto'/>
            <Item_P>{alt}</Item_P>
           </Item_li>
};

export default GalleryItem;