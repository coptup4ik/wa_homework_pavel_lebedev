console.log('task_11 init');
console.log('Релизация задачи тремя способами');


function powV1(x,n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

function powV2(x, n) {
    if(n !== 1 ){
        return x*powV2(x, n-1);
    }else {
        return x;
    }

}

function powV3(x, n) {
    if (n===0){
        return 1;
    }
    else if(n%2===0) {
        let y = powV3(x, n/2);
        return y*y;
    }else {

        return x*powV3(x, n-1);
    }
}



console.log('Способ №1',powV1(20,3));
console.log('Способ №2',powV2(20,3));
console.log('Способ №3',powV3(20,3));
