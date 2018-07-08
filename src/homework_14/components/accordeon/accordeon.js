import "./accordeon.scss";

const ACCORDEON_MAIN_CLASS = 'content';
const ACCORDEON_BUTTON_CLASS = `${ACCORDEON_MAIN_CLASS}__btn`;
const ACCORDEON_TEXT_CLASS = `${ACCORDEON_MAIN_CLASS}__text`;
const TEXT_CLASS = `text`;
const ACCORDEON_ACTIVE_CLASS = `${ACCORDEON_MAIN_CLASS}_active`;


export class Accordeon {
    constructor(targetElement) {
        this.targetEl = targetElement;
        this.render();
        this.toggleActiveClass();

    }
    render() {
        this.button = document.createElement('button');
        this.button.textContent = 'SECTION 1';

        this.list = document.createElement('div');
        this.text = document.createElement('p');

        this.text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius ex exercitationem facere natus, non recusandae rem repudiandae ut. Consectetur doloremque exercitationem explicabo, minus mollitia officiis pariatur veniam. Doloremque, eaque?'

        this.button.classList.add(ACCORDEON_BUTTON_CLASS);
        this.text.classList.add(TEXT_CLASS);
        this.list.classList.add(ACCORDEON_TEXT_CLASS);
        this.targetEl.classList.add(ACCORDEON_MAIN_CLASS);

        this.targetEl.appendChild(this.button);
        this.targetEl.appendChild(this.list);
        this.list.appendChild(this.text);
    }

    toggleActiveClass() {
        this.button.addEventListener('click', () => {
            this.targetEl.classList.toggle(ACCORDEON_ACTIVE_CLASS);
        })
    }
}