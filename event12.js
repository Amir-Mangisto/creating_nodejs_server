const EventEmitter =require('events');
const fs = require('fs');

class Event12 extends EventEmitter{
    constructor(){
        super();
        this.on('task12',this.onGetTask12)
    }
    onGetTask12(fileName,info){
        fs.writeFile(fileName,info,()=>{})
    }
    emitGetTask12(fileName,info){
        this.emit('task12',fileName,info)
    }
}
module.exports = new Event12();