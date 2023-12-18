'use strict'

let btnEn = document.querySelector('.btn-en');
let btnRu = document.querySelector('.btn-ru');
let upBtn = document.querySelector('.up-btn');

btnRu.addEventListener('click', function () {

});
btnEn.addEventListener('click', function () {

});

upBtn.addEventListener('click', function () {

    function scrollToTop() {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }
    scrollToTop();
});


