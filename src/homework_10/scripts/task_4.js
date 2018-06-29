console.log('task_4 init');

let salaries = {
    John: 400,
    Jack: 200,
    Wolf: 1234,
    Bred: 43,
    Johns: 2313,
    Steewey: 568,
    test: 'sada',
    test1: 'asdahfdgsdasd',
    test2: 'xcvc',
    test3: 'asdasdasd',
    test4: '12fcfas'
} ;

function calc(obj) {
    let sum = 0;
    for (let key in obj){
        if (typeof obj[key]!=='number') {
            obj[key]=0;
        }
        sum +=obj[key];

    }
    console.log(sum);
}

calc(salaries);
calc();