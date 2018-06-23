import './homework_9.scss';

function trafficLightToggle() {
    const trafficLightRed = document.querySelector('.trafficLight__light-red');
    const trafficLightGreen = document.querySelector('.trafficLight__light-green');
    const trafficLightYellow = document.querySelector('.trafficLight__light-yellow');

    function turnRedLightOn() {
        trafficLightRed.classList.toggle('trafficLight__light-red-toggle');

    }


    function turnYellowLightOn() {
        trafficLightYellow.classList.toggle('trafficLight__light-yellow-toggle');

    }

    function turnGreenLightOn() {
       trafficLightGreen.classList.toggle('trafficLight__light-green-toggle');

    }

    trafficLightRed.addEventListener('click',turnRedLightOn);
    trafficLightYellow.addEventListener('click',turnYellowLightOn);
    trafficLightGreen.addEventListener('click',turnGreenLightOn);
}

function trafficLightToggleAuto() {
    const trafficLightRed = document.querySelector('.trafficLight__light-red');
    const trafficLightGreen = document.querySelector('.trafficLight__light-green');
    const trafficLightYellow = document.querySelector('.trafficLight__light-yellow');
    setInterval(turnRedLightOn, 4500);
    setInterval(turnYellowLightOn, 5000);
    setInterval(turnGreenLightOn, 5500);


    function turnRedLightOn() {
            trafficLightRed.classList.toggle('trafficLight__light-red-toggle');
    }


    function turnYellowLightOn() {
            trafficLightYellow.classList.toggle('trafficLight__light-yellow-toggle');

    }



    function turnGreenLightOn() {
            trafficLightGreen.classList.toggle('trafficLight__light-green-toggle');
    }

}

trafficLightToggle();
trafficLightToggleAuto();
