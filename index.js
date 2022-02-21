const httpServer = require('http').createServer();

httpServer.on('request',(request,response)=>{
    response.end("hello world")
});
httpServer.listen(3000)
