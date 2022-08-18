import Noodle from './noodle.jpg';
import Pizza from './pizza.jpg';
import Chicken from './pollo.webp';

function menuLoad(content){
    const menuContent = document.createElement('h1');
    content.appendChild(menuContent);
    menuContent.textContent = 'Welcome to the Menu!';
    createOptionMenu('Pizza','This food is just GOD!',Pizza,content);
    createOptionMenu('Noodle','This food is just GOD!',Noodle,content);
    createOptionMenu('Chicken','This food is just GOD!',Chicken,content);
}
function createOptionMenu(foodName,description,img,place){
    createTitleFood(foodName,place);
    createImg(place,img);
    createDescription(description,place);
}
function createImg(place,image){
    const imgContainer = document.createElement('div');
    const img = new Image();
    place.appendChild(imgContainer);
    imgContainer.className='img-container';
    img.src = image;
    imgContainer.appendChild(img);
}
function createTitleFood(name,place){
    const titleFood = document.createElement('div');
    place.appendChild(titleFood);
    titleFood.textContent=name;
    titleFood.className='item-food';
}
function createDescription(descrip,place){
    const description = document.createElement('div');
    place.appendChild(description);
    description.textContent=descrip;
}
export {menuLoad};