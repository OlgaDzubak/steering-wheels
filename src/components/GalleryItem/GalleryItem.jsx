
const GalleryItem = (url, alt) => {

    return  <item_li>
                <item_a href={url}>
                    <item_img 
                        src={url} 
                        alt={alt}/>
                    </item_a>
            </item_li>
};

export default GalleryItem;