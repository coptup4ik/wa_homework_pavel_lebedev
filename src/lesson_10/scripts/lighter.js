// const ACTIVE_CLASS_NAME = 'street-lighter__light_active';

export function lighter(lighterElement) {
    console.log('Lighter Init');
    // const lighterRed = document.querySelector('.street-lighter__light_red');
    // const lighterYellow = document.querySelector('.street-lighter__light_yellow');
    // const lighterGreen = document.querySelector('.street-lighter__light_green');

    const lights = lighterElement.querySelectorAll('.street-lighter__light');


    function switchOff() {
        for (let i=0; i < lights.length; i++) {
            const light = lights[i];
            light.classList.remove('street-lighter__light_active');
        }
    }
    function switchOn(element) {
        element.classList.add('street-lighter__light_active');
    }

    function clickHandler(element) {
        switchOff();
        switchOn(element);
    }


    for (let i=0; i < lights.length; i++){
        const light = lights[i];
        light.addEventListener('click', function () {
            clickHandler(light);
        });
    }
    // lighterRed.addEventListener('click', function () {
    //     clickHandler(lighterRed);
    // });
    // lighterYellow.addEventListener('click', function () {
    //     clickHandler(lighterYellow);
    // });
    // lighterGreen.addEventListener('click', function () {
    //     clickHandler(lighterGreen);
    // });
    //

}