




  //console.log('The System Uptime is ${os.uptime()} seconds');

 //console.log(user);


 
  //console.log(names);


/*const {readFileSync, writeFileSync, readFile} = require('fs');

readFile('./content/subfolder/test.txt',(err, result) =>{
    if (err){
        console.log(err)
        return 
    }
})


const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/second.txt', 'utf8')
 console.log(first);

 

  writeFileSync("./content/result-sync.txt", 
  'This is a dummy text  : ${first}')


const { readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8', (err, result) => {
    if (err){
        console.log(err)
    }
    else {
        console.log(result);
    }
})


console.log(__dirname);
setInterval(()=>{
    console.log('hello world')
}, 2000);


/*const first = readFileSync('./content/subfolder/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf-8');

console.log(first, second);
*/
