console.log('task_6 init');
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

console.log(salaries);

function multiplyNumeric(obj) {
    let o = {};
    for (let key in obj){
        typeof obj[key] === 'string' ? o[key] = obj[key]: o[key]=obj[key]*2;
    }
    return o;
}

console.log( multiplyNumeric(salaries) );
