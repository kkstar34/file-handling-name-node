const fs = require('fs');
const readline = require('readline');
let array;
let tab = []; 

async function processLineByLine() {
  const fileStream = fs.createReadStream('name-challenge.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in name-challenge.txt as a single line break.

  for await (const line of rl) {
    // Each line in name-challenge.txt will be successively available here as `line`.
  
   array = line.split(':');

   array.splice(0, 1);

   array[0];

   console.log(array[0])


   tab.push(array[0]);


  }


  for(name of tab){
    fs.writeFile("name.txt", name+'\n', {flag : 'a+'}, err => {});
  } 



}

processLineByLine();