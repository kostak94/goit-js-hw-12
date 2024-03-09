import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPhotos } from './js/pixabay-api';
import { photosTemplate, refreshLightbox } from './js/render-functions';

import error from './img/bi_x-octagon.svg';

const loader = document.querySelector('.loader-container');
const formEl = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

formEl.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(e) {
  e.preventDefault();
  gallery.innerHTML = '';

  const searchInputValue = e.target.elements.query.value.trim();

  if (!searchInputValue) {
    showEmptyInputToast(), hideLoader();
    return;
  }

  showLoader();

  getPhotos(searchInputValue)
    .then(data => {
      if (data.totalHits === 0) {
        return showErrorToast();
      }
      const markup = photosTemplate(data.hits);
      gallery.innerHTML = markup;
      refreshLightbox();
    })
    .catch(() => showError('Something went wrong!!!'))
    .finally(hideLoader);
  e.target.reset();
}

function showErrorToast() {
  return iziToast.error({
    title: '',
    backgroundColor: '#EF4040',
    titleColor: '#fff',
    messageColor: '#fff',
    message:
      'Sorry, there are no images matching <br/> your search query. Please, try again!',
    iconUrl: error,
    color: '#fff',
    position: 'topRight',
    progressBarColor: '#B51B1B',
  });
}

function showEmptyInputToast() {
  return iziToast.error({
    title: '',
    backgroundColor: '#c55f5f',
    titleColor: '#fff',
    messageColor: '#fff',
    message: 'Search line is empty',
    iconUrl: error,
    color: '#fff',
    position: 'topRight',
    progressBarColor: '#B51B1B',
  });
}
function showError(messageErr) {
  return iziToast.error({
    title: '',
    backgroundColor: '#c55f5f',
    titleColor: '#fff',
    messageColor: '#fff',
    message: messageErr,
    icon: false,
    color: '#fff',
    position: 'topRight',
    progressBarColor: '#B51B1B',
  });
}

function showLoader() {
  return loader.classList.remove('is-hidden');
}

function hideLoader() {
  return loader.classList.add('is-hidden');
}
