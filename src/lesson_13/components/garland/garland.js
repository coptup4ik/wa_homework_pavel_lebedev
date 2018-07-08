export class Garland {
    constructor(targetElement, bulbs){
        this.targetEl = targetElement;
        this.bulbs = bulbs;
        // this.lampsOutput = document.querySelector('.garland__lamps')
        this.control = targetElement.querySelector('.garland__control');
        this.control.addEventListener('click', () => this.toggleAll())

    }
    toggleAll() {
        const enabledElements = this.bulbs.filter((bulb) => {
            return bulb.isEnabled === true;
        });
        console.log(enabledElements);
        if (enabledElements.length > 0 ) {
            this.bulbs.forEach((bulb) => {
                bulb.switchOff();
            })
        }else {
            this.bulbs.forEach((bulb) => {
                bulb.switchOn();
            })
        }
    }
}