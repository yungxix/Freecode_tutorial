// GLOBALS  - NO WINDOW !!!


//__dirname - path to current directory
//__filename - file name
// require  -function to use modules (common JS)
// module - info about current module (file)
//process - info env where the program is being executed


console.log(__dirname);
setInterval(()=>{
    console.log('hello world')
}, 2000);

// Modules 

const John = 'John';
const peter ='peter';  
const name = [];


const sayHi = (name) =>{
    console.log('Hello there ${name}')
}

 sayHi('Timi');
 sayHi(John);
 sayHi(peter);

