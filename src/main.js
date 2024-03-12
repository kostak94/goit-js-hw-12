import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPhotos } from './js/pixabay-api';
import { photosTemplate, refreshLightbox } from './js/render-functions';

import error from './img/bi_x-octagon.svg';

const loader = document.querySelector('.loader-container');
const formEl = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-btn');

let searchInputValue;
let page = 1;
let perPage = 15;

formEl.addEventListener('submit', onSubmitHandler);
loadMore.addEventListener('click', onBtnClickHandler);

async function onSubmitHandler(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  page = 1;

  searchInputValue = e.target.elements.query.value.trim();

  if (!searchInputValue) {
    showError('Search line is empty'), hideLoader();
    return;
  }

  showLoader();

  try {
    const data = await getPhotos(searchInputValue, page);

    if (data.totalHits === 0) {
      hideLoadBtn();
      showError(
        'Sorry, there are no images matching <br/> your search query. Please, try again!'
      );
      return;
    }
    infoMessage(`We found ${data.totalHits} photos`);
    const markup = photosTemplate(data.hits);
    gallery.innerHTML = markup;
    refreshLightbox();
    if (data.totalHits < perPage) {
      hideLoadBtn();
    } else {
      showLoadBtn();
    }
  } catch {
    showError('Something went wrong!!!');
  } finally {
    hideLoader();
    e.target.reset();
  }
}

async function onBtnClickHandler() {
  page += 1;
  showLoader();

  try {
    const data = await getPhotos(searchInputValue, page);
    const lastPage = Math.ceil(data.totalHits / perPage);
    const markup = photosTemplate(data.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
    refreshLightbox();

    if (lastPage === page) {
      hideLoadBtn();
      infoMessage("We're sorry, but you've reached the end of search results");
    }
  } catch {
    showError('Something went wrong!!!');
  } finally {
    hideLoader();
  }
  getScrollByLoadBtnClick();
}

function getScrollByLoadBtnClick() {
  const cardOfGallery = gallery.querySelector('.gallery-item');
  const scrollHeight = Number.parseInt(
    cardOfGallery.getBoundingClientRect().height
  );
  const options = {
    top: scrollHeight * 2,
    behavior: 'smooth',
  };
  window.scrollBy(options);
}

function infoMessage(message) {
  return iziToast.info({
    title: '',
    message,
    position: 'topRight',
  });
}

function showError(message) {
  return iziToast.error({
    title: '',
    backgroundColor: '#c55f5f',
    titleColor: '#fff',
    messageColor: '#fff',
    message,
    iconUrl: error,
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

function showLoadBtn() {
  loadMore.classList.remove('is-hidden');
}
function hideLoadBtn() {
  loadMore.classList.add('is-hidden');
}
