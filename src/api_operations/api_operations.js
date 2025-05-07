import axios from 'axios';

axios.defaults.baseURL = 'https://steering-wheels-backend.onrender.com/steering-wheels';

export async function getCategories(language, abortCtrl) {
      
      const { data } = await axios.get(`/categories?language=${language}`, {signal: abortCtrl.signal});
      return data;
}


export async function getPhotos(language='ua', category='', abortCtrl) {
      const { data } = await axios.get(`/photos?language=${language}&category=${category}`, {signal: abortCtrl.signal});
      return data;
}
