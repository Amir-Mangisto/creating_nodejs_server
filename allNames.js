const namesHttp=require("http").Server;
const fs = require('fs');
const util = require('util');
const readFileNames=util.promisify(fs.readFile)

class GradeNames extends namesHttp{
    constructor(){
        super();
        this.listen(9090);
        this.on('request',this.getNameInfo)
    }
    // getNameInfo =(req,res)=>{
    //     fs.readFile('./namesArray.json',(err,data)=>{
    //         if(err){
    //             res.end("try again")
    //         }
    //         else{
    //             res.end(data)
    //         }
    //     })
    // }
    /////////ASYNC/////
    getNameInfo = (req,res)=>{
        readFileNames('./namesArray.json')
        .then((data)=>{res.end(data)})
        .catch((err)=>{res.end("request problem")})
    }
    
}
module.exports = new GradeNames();