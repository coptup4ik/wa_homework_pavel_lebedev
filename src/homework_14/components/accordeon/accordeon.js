import "./accordeon.scss";

const ACCORDEON_MAIN_CLASS = 'content';
const ACCORDEON_BUTTON_CLASS = `${ACCORDEON_MAIN_CLASS}__btn`;
const ACCORDEON_TEXT_CLASS = `${ACCORDEON_MAIN_CLASS}__text`;
const TEXT_CLASS = `text`;
const ACCORDEON_ACTIVE_CLASS = `${ACCORDEON_MAIN_CLASS}_active`;


export class Accordeon {
    constructor(targetElement, array) {
        this.targetEl = targetElement;
        this.array = array;
        this.contentArray = [];
        this.render();
        this.toggleActiveClass()

    }



    render() {
        for (let i = 0; i <this.array.length ; i++) {
            this.createChild();
            this.createDivContent();
            this.targetEl.appendChild(this.content);
            this.button.textContent = this.array[i].title;
            this.text.textContent =this.array[i].text;
        }
    }

    createDivContent() {
        this.content = document.createElement('div');
        this.content.classList.add(ACCORDEON_MAIN_CLASS);
        this.content.appendChild(this.button);
        this.content.appendChild(this.list);
        this.contentArray.push(this.content);

    }

    createChild() {
        this.button = document.createElement('button');



        this.list = document.createElement('div');
        this.text = document.createElement('p');



        this.button.classList.add(ACCORDEON_BUTTON_CLASS);
        this.text.classList.add(TEXT_CLASS);
        this.list.classList.add(ACCORDEON_TEXT_CLASS);
        this.list.appendChild(this.text);

    }

    toggleActiveClass() {
        this.contentArray.forEach(item => {
            item.addEventListener('click', ()=>{
                item.classList.toggle(ACCORDEON_ACTIVE_CLASS);
                }
            )
        })
    }
}


// this.button.addEventListener('click', () => {
//     this.content.classList.toggle(ACCORDEON_ACTIVE_CLASS);
// })