let initialIdValue = 0; //set ID of element

let parentElement = document.querySelector('.content');


function createButton() {
    let element = document.createElement("div");
    element.innerHTML = '<div class="lamp__element lamp__element_active"></div>\n' +
        '<button class="lamp__button">ON/OFF</button>';
    element.className = 'lamp';
    parentElement.appendChild(element);
}


function removeButton() {
    let element = document.querySelectorAll('.lamp');
    for (let i = 0; i < element.length; i++){
        if (i === element.length-1){
            parentElement.removeChild(element[i]);
        }
    }
}


let createElement = document.querySelector('.add-item');
createElement.addEventListener('click',createButton);

let removeElement = document.querySelector('.remove-item');
removeElement.addEventListener('click',removeButton);