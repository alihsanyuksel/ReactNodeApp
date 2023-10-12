const http = require('http');
const { json } = require('stream/consumers');


const server = http.createServer((request, response)=>{
    
    const book = {
        author: 'ali ihsan yüksel',
        book: 'Geceler',
    }
    

    
    response.setHeader('Content-Type', 'application/json')
    response.write(JSON.stringify(book));
    response.end();
});

server.listen(8000);

