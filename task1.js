// צרו קובץ JS , בתוכו, רוצו בלולאה 14 פעמים והדפיסו מספרים מ 1 עד 14.

// for (let i = 1; i < 15; i++) {
//     console.log(i);
// }

//צרו מערך של 5 שמות שונים והדפיסו לטרמינל.

// let theNames = ["amir","avir","beni","jacob","aschalo"];
// console.log(theNames);

//צרו מערך של 16 מספרים רנדומליים מ 0 עד 10 והדפיסו רק את הזוגיים.

// let randomNumbers = [
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10),
// ]

// randomNumbers.forEach(element => {
//     if(element % 2 == 0){
//         console.log(element);
//     }
// });

//צרו מערך של 4 שמות שונים והדפיסו לקובץ, לאחר מכן קראו את המידע מהקובץ והדפיסו רק את השמות שמתחילים ב A.

// let forNames= ["amnon","ben","charlie","donald"];

const fs = require("fs");

// fs.writeFile('task4.txt',`${forNames}`,()=>{})
// fs.readFile('task4.txt',(err,result)=>{console.log(result.toString());})

//צרו מערך של 12 מספרים רנדומליים מ 0 עד 100 והדפיסו לקובץ רק את המספרים שמתחלקים ב3, לאחר מכן קראו את המידע מהקובץ והדפיסו רק את המספרים שגדולים מ 50

// let randomNumbers = [
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
//   Math.floor(Math.random() * 100),
// ];

// let nums=randomNumbers.filter((item)=>item % 3 == 0)
// fs.writeFile('task5.txt',nums.toString(),()=>{})

//צרו מאזין לארוע של HELLO וכאשר הוא מתרחש מודפס ללוג HELLO THERE, הפעילו פעם אחת. 

const EventEmitter = require("events");

class Hello extends EventEmitter{
    constructor(){
        super();
    }
    onPrintHello(){
        this.on('printHello',(info)=>{
            console.log(info);
        })
    }
    onPrintName(){
        this.on('printName',(nameInfo)=>{
            console.log("Hello there",nameInfo);
        })
    }
    onDoNow(){
        this.on('printDoNow',(x)=>{
            console.log(x);
        })
    }
    emitPrintHello(info){
        this.emit('printHello',info)
    }
    emitPrintName(nameInfo){
        this.emit('printName',nameInfo)
    }
    emitDoNow(z){
        this.emit('printDoNow',z)
    }
    
}
module.exports = new Hello();