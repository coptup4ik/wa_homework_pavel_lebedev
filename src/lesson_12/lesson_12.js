import "./lesson_12.scss";
import {Lighter} from "./components/lighter/lighter.js";

const firstLighter = new Lighter(document.querySelector('#lighter1'));


// function Car(doors, price) {
//     this.doors = doors;
//     this.price = price;
// }
//
// function SportCar(speed, power) {
//     Car.apply(this, arguments);
//     this.speed = speed;
//     this.power = power;
//
// }
//
// function Sedan(speed, power) {
//     Car.apply(this, arguments);
//     this.speed = speed;
//     this.power = power;
//     this.drive = function () {
//         console.log('sportcar rides')
//     }
// }
//
// const car = new Sedan(4, 1000, 220, 180);
// console.log(car);
// car.drive();