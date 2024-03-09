const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42750386-32909fc47eb0ca0c6c8fc758e';

export function getPhotos(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
