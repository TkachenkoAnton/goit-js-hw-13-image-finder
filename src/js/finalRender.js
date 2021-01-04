import apiService from './apiService';
import refs from './refs';
import { updatePhotoMarkup, clearUl } from './markup';

function render() {
  if (apiService.query === '') {
    refs.loadMoreBtn.classList.add('is-hiden');
    return;
  }
  apiService.axiosPixabayApi().then(fullObj => {
    updatePhotoMarkup(fullObj);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}

function submitRender(e) {
  e.preventDefault();
  apiService.resetPage();
  clearUl();
  apiService.query = e.currentTarget.elements.query.value;
  refs.loadMoreBtn.classList.remove('is-hiden');
  render();
}

refs.searchForm.addEventListener('submit', e => {
  submitRender(e);
});

refs.loadMoreBtnLink.addEventListener('click', e => {
  e.preventDefault();
  render();
});
