//SETUP

const server = require('./server');
const route = require('./router');

server(80, route);