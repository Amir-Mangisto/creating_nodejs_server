const cityServer = require('http').Server;
const fs=require('fs');
const util=require('util');
const readFileCity = util.promisify(fs.readFile)
class City extends cityServer{
    constructor(){
        super();
        this.listen(8081);
        this.on('request',this.myCity)
    }
    // myCity = (req,res)=>{
    //     fs.readFile('city.txt',(err,data)=>{
    //         if(err){
    //             res.end("try again")
    //         }
    //         else{
    //             res.end(data)
    //         }
    //     })
    // }
    ////////////////ASYNC
    myCity = (req,res)=>{
        readFileCity('./city.txt')
        .then((data)=>{res.end(data)})
        .catch((err)=>{res.end("this is error")})
    }
}
module.exports = new City();