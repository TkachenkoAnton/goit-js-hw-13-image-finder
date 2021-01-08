import refs from './refs';
import * as basicLightbox from 'basiclightbox';

function fullScreenView(e) {
  if (e.target.nodeName === 'BUTTON') {
    basicLightbox
      .create(
        `<img class="modalImg" width="1400" height="900" src="https://placehold.it/1400x900">`,
      )
      .show();
    const modalImg = document.querySelector('.modalImg');
    modalImg.src = e.target.dataset.source;
  }
}

refs.gallery.addEventListener('click', e => {
  fullScreenView(e);
});
