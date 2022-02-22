// const httpServer = require('http').createServer();

// httpServer.on('request',(request,response)=>{
//     response.end("hello world")
// });
// httpServer.listen(3000)

// const FirstServer = require('./firstServer.js')

// const meLeo = require('./leomessi');

// const theCity = require('./city.js');
// const giveMeNames = require('./allNames')


///////////////////////////////////////////////////////////////////////////////////////////
//6 + 7 + 8 
const event6= require('./task1.js');
event6.onPrintHello();
event6.emitPrintHello("shalom amir")
event6.onPrintName();
event6.emitPrintName('amanda')
event6.onDoNow();
event6.emitDoNow('AMIR')