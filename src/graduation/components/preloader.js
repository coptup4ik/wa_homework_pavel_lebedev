import anime from 'animejs';

let delay = 100;

var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function (el, i) {
        return i * 250
    },
    direction: 'alternate',
    loop: true
});

let preloaderLeft = document.querySelectorAll('.preloader__left');
let preloaderRight = document.querySelectorAll('.preloader__right');


document.body.onload = function () {
    setTimeout(() => {
        let preloader = document.querySelector('.preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
        preloaderLeft.forEach(function (value, currentIndex) {
            setTimeout(function () {
                preloaderLeft[currentIndex].classList.add('preloader__left-delay')
            }, delay * currentIndex);
        });
        preloaderRight.forEach(function (value, currentIndex) {
            setTimeout(function () {
                preloaderRight[currentIndex].classList.add('preloader__right-delay')
            }, delay * currentIndex);
        });
    }, 3000);


};