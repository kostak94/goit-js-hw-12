import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
});

export function photoItemTemplate(photoObj) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = photoObj;
  return `
     <li class="gallery-item">
          <a href="${largeImageURL}" class="photo-link">
            <img class="photo"
                width="360"
                height="152"
                src="${webformatURL}" 
                alt="${tags}" 
            />
          </a>
          <p class="info-photo-box">
            <span class="info-item"><b>Likes</b><br/>${likes}</span>
            <span class="info-item"><b>Views</b><br/>${views}</span>
            <span class="info-item"><b>Comments</b><br/>${comments}</span>
            <span class="info-item"><b>Downloads</b><br/>${downloads}</span>
          </p>
        </li>
    `;
}

export function photosTemplate(arr) {
  return arr.map(photoItemTemplate).join('');
}

export function refreshLightbox() {
  lightbox.refresh();
}
