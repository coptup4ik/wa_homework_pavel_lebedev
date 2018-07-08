import "./select.scss";

const SELECT_CLASS_NAME = 'select';
const SELECT_TITLE_CLASS_NAME = `${SELECT_CLASS_NAME}__title`;
const SELECT_OPTIONS_CLASS_NAME = `${SELECT_CLASS_NAME}__options`;
const SELECT_OPTION_CLASS_NAME = `${SELECT_CLASS_NAME}__option`;
const SELECT_CONTROL_CLASS_NAME = `${SELECT_CLASS_NAME}__control`;

export class Select {
    /**
     * @param {HTMLElement} target element where we need to render
     * @param {Array<String>} options Options for drop down menu
     */
    constructor(target, options) {
        this.targeetElement = target;
        this.options = options;

    }

    render () {
        this.titleElement = document.createElement('button');
        this.listElement = document.createElement('ul');


        this.titleElement.classList.add(SELECT_TITLE_CLASS_NAME);
    }
}