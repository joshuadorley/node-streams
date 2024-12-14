const http = require('http');
const fs = require('fs'); 
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Serve the main HTML page
        const filePath = path.join(__dirname, 'index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(filePath).pipe(res);
    } else {
        // Serve the 404 HTML page
        const filePath = path.join(__dirname, '404.html');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(filePath).pipe(res);
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
