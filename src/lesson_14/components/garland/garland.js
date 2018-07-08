import {Bulb} from "../bulb/bulb";


import "./garland.scss";


export class Garland {
    constructor(targetElement){
        this.targetEl = targetElement;
        this.bulbs = [];
        this.render();
    }
    render() {

        this.output = document.createElement('div');

        this.output.classList.add('garland__output');

        this.targetEl.appendChild(this.output);


        this.targetEl.classList.add('garland');
        this.renderControls();
    }

    renderControls() {
        this.controlAdd = document.createElement('button');
        this.controlAdd.classList.add('garland__control');
        this.controlAdd.textContent = 'Add';
        this.targetEl.appendChild(this.controlAdd);

        this.controlSwitchOnAll = document.createElement('button');
        this.controlSwitchOffAll = document.createElement('button');

        this.controlSwitchOffAll.textContent = 'SWITCH OFF';
        this.controlSwitchOnAll.textContent = 'SWITCH ON';

        this.targetEl.appendChild(this.controlSwitchOffAll);
        this.targetEl.appendChild(this.controlSwitchOnAll);

        this.controlAdd.addEventListener('click', () => this.add());
        this.controlSwitchOffAll.addEventListener('click', () => this.toggleOff());
        this.controlSwitchOnAll.addEventListener('click', () => this.toggleOn())

    }

    add() {

        const bulbContainer = document.createElement('div');

        const bulb = new Bulb(bulbContainer);

        this.bulbs.push(bulb);
        this.output.appendChild(bulbContainer);

    }

    toggleOn() {
        this.bulbs.forEach(bulb => {
            bulb.switchOn()
        });
    }

    toggleOff() {
        this.bulbs.forEach(bulb => {
            bulb.switchOff();
        })
    }
}