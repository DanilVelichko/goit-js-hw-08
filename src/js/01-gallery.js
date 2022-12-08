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

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createPhotoRender(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup); 

let lightbox = $('.gallery a').simpleLightbox({ /* options */ });

console.log(galleryItems);

