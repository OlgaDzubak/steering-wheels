import axios from 'axios';

async function getPhotos(page, per_page) {
      
      console.log("Я в getPhotos");
      const data = await axios.get(`search?page=${page}&per_page=${per_page}`);
      return data;
}

export default getPhotos;