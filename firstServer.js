const httpServer = require('http').Server;

class FirstServer extends httpServer{
    constructor(){
        super();
        this.listen(3000);
        this.on('request',this.resRequest);
    }
    resRequest = (req,res)=>{
        res.end("welcome")
    }
}

module.exports = new FirstServer();