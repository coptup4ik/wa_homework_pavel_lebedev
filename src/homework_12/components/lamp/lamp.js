const LAMP_LIGHT_CLASS_NAME = 'lamp';
const LAMP_LIGHT_ACTIVE_CLASS_NAME = 'lamp__element_active';

class Lamp {
    constructor(targetElement){
        this.targetElement = targetElement;
        this.lamp = this.targetElement.querySelectorAll('.'+LAMP_LIGHT_CLASS_NAME) ;
        console.log(this);
    }
    swithLampOn(element){
        this.lamp.forEach((element)=> {
            element.classList.add(LIGHTER_LIGHT_ACTIVE_CLASS_NAME)
        }
        )
    }
}

export {Lamp};