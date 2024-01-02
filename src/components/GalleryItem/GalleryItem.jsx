
const GalleryItem = ({url, alt, id}) => {
    return  <li>
                {/* <a href={url}> */}
                    <img 
                        src={url} 
                        alt={alt}

                    />
                {/* </a> */}
            </li>
};

export default GalleryItem;