const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
   res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('Here is about Section');
    }
    res.end(`
    <h1> OOPs!</h1>
    <p> we are not able to find </p>
    <a href="/">back home</a>
    `)
});

server.listen(5000);


