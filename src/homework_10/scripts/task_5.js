console.log('task_5 init');

let salaries = {
    John: 400,
    Jack: 200,
    Wolf: 1234,
    Grubert: 7896,
    Bred: 43,
    Johns: 2313,
    Steewey: 568,
    test: 'sada',
    test1: 'asdahfdgsdasd',
    test2: 'xcvc',
    test3: 'asdasdasd',
    test4: '12fcfas',
    test5: '12'
} ;


function biggestSalary(obj) {
    let maxValue = 0;
    let maxName = '';
    for (let key in obj){
        if (typeof obj[key] === 'string'){
            obj[key] = 0;
        }else {
            if (maxValue < obj[key]){
                maxValue=obj[key];
                maxName=key;
            }
        }
    }
    console.log(maxName);
}

biggestSalary(salaries);
// console.log( biggestSalary());