
const GalleryItem = ({url, alt, key}) => {
    console.log(key, " " ,url, " ",  alt)
    return  <li key={key}>
                {/* <a href={url}> */}
                    <img 
                        src={url} 
                        alt={alt}

                    />
                {/* </a> */}
            </li>
};

export default GalleryItem;