import axios from 'axios';

axios.defaults.baseURL = 'https://steering-wheels-backend.onrender.com/steering-wheels';

async function getPhotos(page, per_page) {
      
      const { data } = await axios.get(`/search?page=${page}&per_page=${per_page}`);
      return data;
}

export default getPhotos;