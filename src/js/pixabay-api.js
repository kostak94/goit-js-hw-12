import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42750386-32909fc47eb0ca0c6c8fc758e';

export async function getPhotos(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  };

  const url = `${BASE_URL}`;

  const res = await axios.get(url, { params });
  return res.data;
}
