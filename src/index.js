import './style.css';
import './styleMenu.css';
import './styleContact.css';
import {pageLoad} from './initialPageLoad';
import {menuLoad} from './menuPageLoad';
import {contactLoad} from './contactPageLoad';
import RestaurantImg from './restaurant-img.jpg';

const buttons = document.querySelectorAll('.btn');
const content = document.querySelector('.content');
buttons.forEach(btn => {
    btn.addEventListener('click',changeContent);
});
pageLoad(content);
function changeContent(e){
    setContent(pageLoad,e.currentTarget.id,'home');
    setContent(menuLoad,e.currentTarget.id,'menu');
    setContent(contactLoad,e.currentTarget.id,'contact');
}
function setContent(funcLoad ,currentId ,id){
    if(currentId === id){
        resetContent();
        funcLoad(content);
    }
}
function resetContent(){
    content.innerHTML= "";
}