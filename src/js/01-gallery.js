import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

const createPhotoRender = (gallery) => {
        return gallery.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
      `;
    }).join('');
};

document.querySelector('.gallery')
  .insertAdjacentHTML('beforeend',
    createPhotoRender(galleryItems)); 

 new SimpleLightbox('.gallery a', {
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    });

console.log(galleryItems);


