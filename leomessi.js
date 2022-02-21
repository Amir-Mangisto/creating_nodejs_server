const celebHttp = require("http").Server;
const fs = require('fs');
const util=require('util')
const readFilePromise=util.promisify(fs.readFile);  
class meLeo extends celebHttp {
  constructor() {
    super();
    this.listen(8080);
    this.on("request", this.celebInfo);
  }
//   celebInfo = (req, res) => {
//     fs.readFile("./myFile.txt", (err, data) => {
//       if (err) {
//         res.end("error");
//       } else {
//         res.end(data.toString());
//       }
//     });
//   };

  ///////////////async
  celebInfo = (req, res) =>{
    readFilePromise('./myFile.txt')
    .then((data)=>{res.end(data)})
    .catch((err)=>{res.end("cant get info")})
  }
}
module.exports = new meLeo();
