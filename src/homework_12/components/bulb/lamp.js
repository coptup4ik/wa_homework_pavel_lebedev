const BUTTON_LAMP_CLASS = 'lamp__control';
const LAMP_CLASS = 'lamp__element';

export class LampLight {
    constructor(element) {
        this.element = element;
        this.button = element.querySelector('.'+BUTTON_LAMP_CLASS);
        this.light  = element.querySelector('.'+LAMP_CLASS);
        this.button.addEventListener('click', ()=> this.toggle());
        this.enabled = false;

    }
    switchOn() {
        this.element.classList.add('lamp_active');
        this.enabled = true;
    }

    switchOff() {
        this.element.classList.remove('lamp_active');
        this.enabled = false;
    }

    toggle() {
        if (this.enabled) {
            this.switchOff()
        }else {
            this.switchOn()
        }
    }
}