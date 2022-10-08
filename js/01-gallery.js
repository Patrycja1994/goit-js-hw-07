import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const elements = galleryItems
    .map( ({preview, original, description}) =>{
        return `<a class= "gallery_link" href= '${original}'>
        <img src = '${preview}' 
        data-source = '${original}' 
        alt = '${description}/> 
        </a>'`;
    })
    .join("");

galleryList.insertAdjacentHTML("beforeend", elements);
