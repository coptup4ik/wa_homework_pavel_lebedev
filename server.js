const http = require('http');
let info = {"text":"some plain text","author":"some author"};
let array = [];
array.push(info);


http.createServer((req, resp)=>{
    if (req.method === "GET") {
        resp.writeHead(200, {'Content-type': 'application/json', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'Access-Control-Allow-Methods,  DELETE, PUT, POST, GET',
            'Access-Control-Allow-Origin': '*'});
        resp.end(
            JSON.stringify(array)
            )
    }else if (req.method === "POST") {
        let body = '';
        req.on("data", function (chunk) {

            body += chunk;


        });

        req.on("end", function(){
            resp.writeHead(200, { "Content-Type": "application/json" });
            let b = JSON.parse(body)
            resp.end(body);

            array.push(b)

        });
    }


}).listen(3000,()=>{
    console.log('server is running')
});

