var _ = require('lodash');
var net = require('net');

var telnetServer = net.createServer();

var connectionPool = [];

telnetServer.listen(8124);

telnetServer.on('connection', function (connection) {

    console.log(connection);
    setInterval(function () {
        connection.write(`${Math.random()}\n`);
    }, 200);

});