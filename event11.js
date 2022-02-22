const EventEmitter=require('events');
const fs =require('fs');

class Event11 extends EventEmitter{
    constructor(){
        super();
        this.on('string',this.omPrintMsg)
    }
    omPrintMsg(name){
        fs.writeFile(name,'im always listening ',()=>{})
    }
    emitPrintMsg(name){
        this.emit('string',name)
    }
}
module.exports = new Event11();