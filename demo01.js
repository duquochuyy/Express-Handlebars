const http = require('http')
const server = http.createServer((req, res) => {{
    switch (req.url) {
        case "/":
            res.end('Hello');
            break;
        default:
            res.end('Not found!');
    }
}})
server.listen(3000)