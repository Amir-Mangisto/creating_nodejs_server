const EventEmitter=require('events');

class Event10 extends EventEmitter{
    constructor(){
        super();
        this.onPrintToFile();
    }
    onPrintToFile(){
        this.on('printListen',()=>{
            console.log("im listening ");
        })
    } 
    emitPrintToFile(){
        this.emit('printListen')
    } 
}
module.exports = new Event10();