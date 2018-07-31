export class Ajax {
    static get(successCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://localhost:4001/comments');
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if(xhr.status === 200 || xhr.status === 304) {
                    const list = JSON.parse(xhr.response);
                    successCallback(list)
                } else {
                    // errorCallback(xhr);
                }
            }
        }
    }

    static post(){
        const xhr = new XMLHttpRequest();
        let a = document.querySelector('.commentarea');
        let  body = JSON.stringify( "author" );

        xhr.open ('POST', 'http://localhost:4001/comments');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(body)
    }
}
    // successCallback, errorCallback