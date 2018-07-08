import "./circle.scss";

export class AnimatedCircle {
    constructor(targetElement) {
        this.targetEl = targetElement;
        document.addEventListener('click', ()=> this.toggle());
        this.enabled = false;

    }

    toggleAnimationOn() {
        this.enabled = true;
        this.targetEl.classList.add('animatedCircle');
        this.setCoordinates();

    }

    toggleAnimationOff() {
        this.enabled = false;
        this.targetEl.classList.add('circle');
        this.setCoordinates();
    }

    toggle() {
        if (this.enabled){
            this.targetEl.classList.remove('animatedCircle');
            this.toggleAnimationOff();
        }else {
            this.targetEl.classList.remove('circle');
            this.toggleAnimationOn();
        }
    }

    setCoordinates() {
        this.targetEl.style.left = event.clientX -25 + 'px';
        this.targetEl.style.top = event.clientY -25  + 'px';
    }

}