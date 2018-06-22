import './lesson_7.scss';

//
// let user = {
//     name: 'Pavel',
//     age: '28',
//     address: 'sadsadasdasdad',
//     phoneNumber:'+66558562144'
// };
//
// let product = {
//     price: '2000',
//     title: 'Iphone',
// };
const product2 = {
    price: '2050',
    title: 'Iphone',
};


const name = prompt('Enter your name');
console.log(name)

for (let i=0; i<name.length; i=i+2) {
    // console.log (i)
    console.log(name[i]);
}

// console.log(total);
//
//
// console.log('Done')

// const total = parseInt(product.price) + parseInt(product2.price);