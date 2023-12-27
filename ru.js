'use strict'

let btnEn = document.querySelector('.btn-en');
let btnRu = document.querySelector('.btn-ru');
let upBtn = document.querySelector('.up-btn');

btnEn.addEventListener('click', function () {
    window.location.href = 'index.html';
});

upBtn.addEventListener('click', function () {

    function scrollToTop() {
        let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }
    scrollToTop();
});


