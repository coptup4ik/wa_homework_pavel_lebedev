import "./lighter.scss";

const LIGHTER_LIGHT_CLASS_NAME = 'street-lighter__light';
const LIGHTER_LIGHT_ACTIVE_CLASS_NAME = 'street-lighter__light_active';

class Lighter {
    constructor(targetElement) {
        this.targetElement = targetElement;
        this.lights = this.targetElement.querySelectorAll('.'+LIGHTER_LIGHT_CLASS_NAME);
        console.log(this);
        this.attachEvents();
    }
    switchOffLights() {
        this.lights.forEach(
            (light) => {
            light.classList.remove(LIGHTER_LIGHT_ACTIVE_CLASS_NAME);
            }
        );
    }
    switchOnLights(element){
        element.classList.add(LIGHTER_LIGHT_ACTIVE_CLASS_NAME);
    };
    attachEvents() {
        this.lights.forEach( light => {
            light.addEventListener('click', () => {
                this.switchOffLights();
                this.switchOnLights(light);
            });
            }
        )
    }
}

export {Lighter};