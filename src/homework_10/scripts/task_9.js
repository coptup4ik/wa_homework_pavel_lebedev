console.log('task_9 init');

let array = ['banana', 1, 45, 'any', 23, 54, 43, 'hello', 0, false];
function find(arr, value) {
    for (let key in arr){
        if (arr[key]===value){
            return key;
        }
    }
    return -1;
}

console.log ( find(array, '0') );