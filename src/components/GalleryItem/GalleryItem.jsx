import { Item_li, Item_img, Item_P } from "./GalleryItem.styled";

const GalleryItem = ({url, alt, id}) => {
    return  <Item_li>
                {/* <a href={url}> */}
                    <Item_img src={url} alt={alt} />
                {/* </a> */}
                <Item_P>{alt}</Item_P>
            </Item_li>
};

export default GalleryItem;