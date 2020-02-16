const express = require('express');

const server = express();

server.get('/', (req, res) => {
    return res.send('Hello');
});
Console.log('Vistoria');

server.listen(3333);

