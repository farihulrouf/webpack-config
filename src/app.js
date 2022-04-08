import style from './main.css'
import Logo from './images/logo.png'
import Banner from './images/banner.png'
import Ship from './images/ship.png'
import product1 from './images/product1.png'
import menu from './images/menu.png'
import close from './images/close.png'

const bar = document.getElementById('bar')
const clos = document.getElementById('close')
const nav = document.getElementById('navbar')
if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(clos) {
    clos.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


