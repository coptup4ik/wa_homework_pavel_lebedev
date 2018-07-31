import anime from 'animejs';


var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});


document.body.onload =function () {
    setTimeout ( ()=>{
    let preloader = document.querySelector('.preloader');
    if (!preloader.classList.contains('done')) {
        preloader.classList.add('done')
    }
},3000)
};