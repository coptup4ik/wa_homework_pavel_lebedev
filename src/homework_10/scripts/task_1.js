console.log('task_1 init');

function randomInteger(min, max) {
    let result = Math.floor(min + Math.random()*(max+1-min));
    console.log(result);
}
randomInteger(1, 10);