console.log('task_10 init');

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7 , 16, 36, 54, 95, 154 ];
console.log(numbersArray);

function filterRange(arr, a, b) {
    let newArray = [];
    for (let i = 0;  i<arr.length; i++){

        if (arr[i] >= a && arr[i] <= b) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

console.log( filterRange(numbersArray, 7, 36) );