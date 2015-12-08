var net = require('net');

var server = net.createServer(function (socket) {
    socket.end("goodbye\n");
});

server.listen(8080, function() {
    var address = server.address();
    console.log("opened server on %j", address);
});