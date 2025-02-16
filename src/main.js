import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const waitMessage = document.querySelector('.wait-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  let searchImage = input.value.trim();
  if (!searchImage) {
    iziToast.warning({
      title: 'Error',
      message: 'Input search string',
      position: 'topRight',
    });
    return;
  }

  waitMessage.innerHTML =
    'Loading images, please wait...<span class="loader"></span>';

  document.querySelector('.gallery').innerHTML = '';

  searchImages(searchImage)
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        renderImages(response.data.hits);
      }
      waitMessage.textContent = '';
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again',
        position: 'topRight',
      });
      console.log(error);
    })
    .finally(() => {
      waitMessage.textContent = '';
    });
  form.reset();
});
