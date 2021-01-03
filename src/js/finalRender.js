import apiService from './apiService';
import refs from './refs';
import { updatePhotoMarkup, clearUl } from './markup';

function render() {
  apiService.axiosPixabayApi().then(fullObj => {
    updatePhotoMarkup(fullObj);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  apiService.resetPage();
  clearUl();
  apiService.query = e.currentTarget.elements.query.value;
  render();
});

refs.loadMoreBtn.addEventListener('click', e => {
  e.preventDefault();
  render();
});
