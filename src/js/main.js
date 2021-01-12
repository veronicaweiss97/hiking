'use strict';

window.addEventListener('scroll', () => {
    let scrollRes = window.pageYOffset;
    console.log(scrollRes);
});

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 506) {
        const digit = document.querySelector('.number');
        digit.classList.add('number__show');
        const digitTwo = document.querySelector('.number2');
        digitTwo.classList.add('number__show');
        const digitThree = document.querySelector('.number3');
        digitThree.classList.add('number__show');
    } else if (window.pageYOffset < 481)  {
        const digit = document.querySelector('.number');
        digit.classList.remove('number__show');
        const digitTwo = document.querySelector('.number2');
        digitTwo.classList.remove('number__show');
        const digitThree = document.querySelector('.number3');
        digitThree.classList.remove('number__show');
    }
    if ( window.pageYOffset >= 999) {
        const digit = document.querySelector('.number');
        digit.classList.remove('number__show');
        const digitTwo = document.querySelector('.number2');
        digitTwo.classList.remove('number__show');
        const digitThree = document.querySelector('.number3');
        digitThree.classList.remove('number__show');
    }
    if(window.pageYOffset >= 951) {
        const img = document.querySelector('.photo');
        img.classList.add('photo_show');
        const imgTwo =document.querySelector('.photo_two');
        imgTwo.classList.add('photo_show');
        const imgThree =document.querySelector('.photo_three');
        imgThree.classList.add('photo_show');
    } else if (window.pageYOffset < 800) {
        const img = document.querySelector('.photo');
        img.classList.remove('photo_show');
        const imgTwo =document.querySelector('.photo_two');
        imgTwo.classList.remove('photo_show');
        const imgThree =document.querySelector('.photo_three');
        imgThree.classList.remove('photo_show');
    }
    if ( window.pageYOffset >= 1743) {
        const img = document.querySelector('.photo');
        img.classList.remove('photo_show');
        const imgTwo =document.querySelector('.photo_two');
        imgTwo.classList.remove('photo_show');
        const imgThree =document.querySelector('.photo_three');
        imgThree.classList.remove('photo_show');
    }
    if(window.pageYOffset >= 1743) {
        const imgFour = document.querySelector('.photo_four');
        imgFour.classList.add('photo_show');
        const title =document.querySelector('.three__content-descr-title');
        title.classList.add('title_show');
        const text = document.querySelector('.three__content-descr-text');
        text.classList.add('text_show');
    } else if (window.pageYOffset < 1643) {
        const imgFour =document.querySelector('.photo_four');
        imgFour.classList.remove('photo_show');
        const title =document.querySelector('.three__content-descr-title');
        title.classList.remove('title_show');
        const text = document.querySelector('.three__content-descr-text');
        text.classList.remove('text_show');
    } 
    if (window.pageYOffset >= 2312) {
        const imgFour =document.querySelector('.photo_four');
        imgFour.classList.remove('photo_show');
        const title =document.querySelector('.three__content-descr-title');
        title.classList.remove('title_show');
        const text = document.querySelector('.three__content-descr-text');
        text.classList.remove('text_show');
    }

    if(window.pageYOffset >= 2392) {
        const imgFive =document.querySelector('.photo_five');
        imgFive.classList.add('photo_show');
        const textTwo = document.querySelector('.four__content-descr');
        textTwo.classList.add('descr_show');
    } else if (window.pageYOffset < 2241) {
        const imgFive =document.querySelector('.photo_five');
        imgFive.classList.remove('photo_show');
        const textTwo = document.querySelector('.four__content-descr');
        textTwo.classList.remove('descr_show');
    } 
});