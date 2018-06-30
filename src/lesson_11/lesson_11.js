import "./lesson_11.scss";
//
// let products = [
//     {
//         title: 'Test',
//         price: '2500asd'
//     },
//     {
//         title: 'Test',
//         price: '2500'
//     },
//     {
//         title: 'Test',
//         price: '2800'
//     }
// ];
//
// function calcTotal(obj) {
//     let sum = 0;
//     for (let i=0; i < obj.length; i++ ){
//         if (isNaN(obj[i])){
//             obj[i]=0;
//         }
//         sum += obj[i];
//     }
//     return sum;
// }
//
//
// function calcTotal2(obj) {
//     let sum = 0;
//     for (let i=0; i < obj.length; i++ ){
//         const number = Number(obj[i].price);
//         if (!isNaN(number)) {
//             sum += number;
//         }
//     }
// }
//
//
//
//
// // console.log( calcTotal([1, 2, 3, 4, '1233hsadsa']) );
// console.log( calcTotal2(products));

function greeting() {
    console.log(this);
    console.log('Hello my nam is '+ this.name);
}


function development() {
    console.log('I use '+ this.language);

}

// const person = new Person('John', 30);
// const person2 = new Person('Jack', 20);

// function counter() {
//     let clickCounter = 0;
//     const btn = document.querySelector('#btn');
//     btn.addEventListener('click', ()=> {
//         clickCounter++;
//         console.log(clickCounter)
//     })
// }
//

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.greet = greeting;
// }
// const obj = new Person();
//
// person.greet();
// person2.greet();
// // counter();

function Developer(name, age, language) {
    this.name = name;
    this.age = age;
    this.language = language;
    this.greet = greeting;
    this.development = development
}

const programmer = new Developer( 'Stewey', 25, 'C++' );

programmer.greet();
programmer.development();