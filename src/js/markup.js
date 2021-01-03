import axiosPixabayApi from './apiService';
import refs from './refs';
import debounce from 'lodash.debounce';
import markupRender from '../templates/markup.hbs';

const debounced = debounce(() => {
  getResultObj();
}, 1000);

function getResultObj() {
  axiosPixabayApi(refs.searchForm.value).then(fullObj => render(fullObj));
}

function render(fullObj) {
  refs.gallery.insertAdjacentHTML('beforeend', markupRender(fullObj));
}

refs.searchForm.addEventListener('input', debounced);
