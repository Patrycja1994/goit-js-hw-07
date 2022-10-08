import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const gallery = document.querySelector(".gallery");
const elementsGallery = galleryItems
    .map( ({preview, original, description}) =>
        `<a class= "gallery_link" href= '${original}'>
        <img src = '${preview}' 
        alt = '${description}' /> 
        </a>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", elementsGallery);

const lightbox = new SimpleLightbox('.gallery a', { 
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250
});

gallery.addEventListener("click", lightbox); 