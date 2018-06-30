console.log('task_9 init');

let array = ['banana', 1, 45, 'any', 23, 54, 43, 'hello', 0, false];
function find(arr, value) {
    for (let i =0; i < arr.length; i++){
        if (arr[i]===value){
            return i;
        }
    }
    return -1;
}

console.log ( find(array, 45) );