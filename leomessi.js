const celebHttp = require("http").Server;
const fs = require('fs');

class meLeo extends celebHttp {
    constructor(){
        super();
        this.listen(8080);
        this.on('request',this.celebInfo)
    }
    celebInfo(req,res) {
        fs.readFile('./myFIle.txt',(err,data)=>{
            res.end(data)
        })
    }
}

module.exports = new meLeo();