const jsonServer = require('json-server');
const express = require('express');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const app = express();

const porta = 3000;

// JSON Server
server.use(middlewares);
server.use(router);

// Express para páginas
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciar Servidor
server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
