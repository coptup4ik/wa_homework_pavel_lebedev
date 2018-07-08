import "./bulb.scss";

export class Bulb {
    constructor(targetElement) {
        this.target = targetElement; //присваиваем контекст аргументу
        // this.control = targetElement.querySelector('.bulb__control'); // находим кнопку внутри блока (благодаря контексту определяется именно та кнопка, что нужна)
        // this.lighter = targetElement.querySelector('.bulb__lighter');
        this.isEnabled = false;
        this.control.addEventListener('click', this.toggle.bind(this))// присваиваем функцию переключения кнопке
    }

    switchOn(){
        this.target.classList.add('bulb_active');
        this.isEnabled = true;

    }

    switchOff(){
        this.target.classList.remove('bulb_active');
        this.isEnabled = false;

    }

    toggle() {
        if (this.isEnabled) {
            this.switchOff();
        }else {
            this.switchOn();
        }
    }
    render() {

    }
}


// this.toggle.bind(this) =    () => this.toggle()