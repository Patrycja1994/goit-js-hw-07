import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const elements = galleryItems
    .map( ({preview, original, description}) =>{
        return `<a class= "gallery_link" href= '${original}'>
        <img src = '${preview}' 
        data-source = '${original}' 
        alt = '${description}'/> 
        </a>'`;
    }) 
    .join("");

galleryList.insertAdjacentHTML("beforeend", elements);

galleryList.addEventListener ("click", clickOpenPicture);
function clickOpenPicture(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

instance.show()
}

galleryList.addEventListener("keydown", closePictures);
function closePictures(event) {
    if (event.code === 'ESCAPE') {
        instance.close(); 
    }
}
console.log(galleryItems);