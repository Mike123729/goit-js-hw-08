// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const item = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

galleryEl.innerHTML = item;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
  captionPosition: 'bottom',
  showCounter: false,
});

console.log(galleryItems);
