console.log('tas_8 init');

let sum = 0;
function promptSum() {
    let a = [];
    while (true) {
        let ask = prompt('Enter number', '');
        if (ask === '' || ask===null || isNaN(ask)) {
            a.push(ask);
            break;
        }
        a.push(sum);
        sum += +ask;
    }
    alert(sum);
    console.log(a);
}
promptSum();