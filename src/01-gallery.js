import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

galleryItems.forEach((element, index) => {
    element.id = index;
})

console.log(galleryItems);

const containerGallery = document.getElementsByClassName('gallery');
const list = createMarkup(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', list);
console.log(containerGallery);


function createMarkup(arr) {
     return arr.map(({id, preview, description, original }) =>
           `<li class="gallery__item" data-image-id="${id}">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                        width="300"
                    />
                </a>
            </li>` 
           ).join('')
}

new SimpleLightbox('.gallery a',{
    captions: true,
    captionsData: 'alt', 
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    enableKeyboard: true,
    })
