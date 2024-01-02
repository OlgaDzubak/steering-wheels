import axios from 'axios';

async function getPhotos(page, per_page) {
      axios.defaults.params;
      console.log("я в getPhotos");
      const data = await axios.get(`steering-wheels/query?page=${page}&per_page=${per_page}`);
      return data;
}

export default getPhotos;