import Noodle from './noodle.jpg';
import Pizza from './pizza.jpg';
import Chicken from './pollo.webp';
const Food = (nameFood,description,img,place)=>{
    const createOptionMenu = ()=>{
        createTitleFood(nameFood,place);
        createImg(place,img);
        createDescription(description,place);
    }
    const createImg = (place,image)=>{
        const imgContainer = document.createElement('div');
        const img = new Image();
        place.appendChild(imgContainer);
        imgContainer.className='img-container';
        img.src = image;
        imgContainer.appendChild(img);
    }
    const createTitleFood=(name,place)=>{
        const titleFood = document.createElement('div');
        place.appendChild(titleFood);
        titleFood.textContent=name;
        titleFood.className='item-food';
    }
    const createDescription=(descrip,place)=>{
        const description = document.createElement('div');
        place.appendChild(description);
        description.textContent=descrip;
    }
    return{createOptionMenu}
} 
function menuLoad(content){
    const menuContent = document.createElement('h1');
    content.appendChild(menuContent);
    menuContent.textContent = 'Welcome to the Menu!';
    const pizza = Food('Pizza','This food is just GOD!',Pizza,content);
    const noodle=Food('Noodle','This food is just GOD!',Noodle,content);
    const chicken = Food('Chicken','This food is just GOD!',Chicken,content);
    pizza.createOptionMenu();
    noodle.createOptionMenu();
    chicken.createOptionMenu();
}
export {menuLoad};