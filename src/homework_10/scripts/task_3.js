console.log('task_3 init');
function isEmpty(obj) {
    for(let key in obj){
        return false;
    }
    return true;
}

let a = {};
console.log(isEmpty(a));
a.name = 'Вася';
console.log('Добавляем значения для проверки функции', a);
console.log(isEmpty(a));