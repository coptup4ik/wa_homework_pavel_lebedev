export class LampManager {
    constructor(element, array) {
        this.element = element;
        this.array = array;
        console.log();
        this.button = element.querySelector('.buttons');
        this.button.addEventListener('click', () => this.toggleAll())
    }

    toggleAll() {
        let emptyArray = this.array.filter(item => {
            return item.enabled === true;
        });
        if (emptyArray.length > 0) {
            this.array.forEach(item => {
                item.switchOff();
            })
        } else {
            this.array.forEach(item => {
                item.switchOn();
            })
        }
    }
}