const menu = document.querySelector('.gumburger');
const closed = document.querySelector('.close');

const toggleMenu = () => document.querySelector('.menu-open').classList.add('active');

menu.addEventListener("click", e => {
    e.stopPropagation();
    toggleMenu();
})

document.body.addEventListener("click", e => {
    const target = e.target;

    if (target.tagName != 'BODY') document.querySelector('.menu-open').classList.remove('active');
    else document.querySelector('.menu-open').classList.remove('active');
})