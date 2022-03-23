'use strict';

// 📌 focus current menu page 🚨 LOCAL - one for each view

window.onload = function() {
    document.getElementById('menu_instructions').focus();
}

// 📌 DIRECTIONAL BUTTONS 🚨 GLOBAL

const directionalBtn_up = document.getElementById('directionalBtn_up');
const directionalBtn_left = document.getElementById('directionalBtn_left');
const directionalBtn_right = document.getElementById('directionalBtn_right');
const directionalBtn_down = document.getElementById('directionalBtn_down');

let btnHoverTip = document.getElementById('btnHoverTip');

// 👁‍🗨 refactor using FOR ... OF

directionalBtn_up.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'colapse';
});

directionalBtn_left.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'previous';
});

directionalBtn_right.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'next';
});

directionalBtn_down.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'expand';
});

directionalBtn_up.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
});

directionalBtn_left.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
});

directionalBtn_right.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
});

directionalBtn_down.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
});

// 📌 A B BUTTONS 🚨 GLOBAL

let btnA = document.getElementById('btnA');
let btnB = document.getElementById('btnB');

btnA.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'edit';
    btnA.style.fontFamily = 'Dripicons';
    btnA.innerText = '';
});

btnB.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'delete';
    btnB.style.fontFamily = 'Dripicons';
    btnB.innerText = '';
});

btnA.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
    btnA.style.fontFamily = 'finalsix';
    btnA.innerText = 'A';
});

btnB.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
    btnB.style.fontFamily = 'finalsix';
    btnB.innerText = 'B';
});

// 📌 SLIDESHOW 🚨 GLOBAL

let slideIndex = 1;
let slides = document.getElementsByClassName("screenContent");
showSlides(slideIndex);

directionalBtn_left.addEventListener('click', () => {
    plusSlides(-1);
});
directionalBtn_right.addEventListener('click', () => {
    plusSlides(1);
});


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

// 📌 EXPAND / CONDENSE GAMEBOY CONTAINER

let gameboyContainer = document.getElementById('gameboyContainer');
let mainContainer = document.getElementById('mainContainer');

directionalBtn_down.addEventListener('click', () => {
    window.scrollTo(0, 0);
    mainContainer.setAttribute('class', 'colapsed');
    gameboyContainer.setAttribute('class', 'gameboyContainer expanded');
});

directionalBtn_up.addEventListener('click', () => {

    gameboyContainer.setAttribute('class', 'gameboyContainer');
    mainContainer.removeAttribute('class');

});