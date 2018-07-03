function Animal(color, tail, eyes, name ) {
   this.color = color;
   this.tail = tail;
   this.eyes = eyes;
   this.name = name;
}

function Horse() {
    Animal.apply(this, arguments);
    this.sound = function () {
        console.log('Horse says igogo')
    }

}

function Bird() {
    Animal.apply(this, arguments);
    this.sound = function () {
        console.log('Bird says chickchirik')

    }
}

const horseAnimal = new Horse('brown', 'true', 'two', 'Jack');
const birdAnimal = new Bird('blue', 'true', 'two', 'Birdy');
console.log(horseAnimal);
horseAnimal.sound();

console.log(birdAnimal);
birdAnimal.sound();