const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/7785_회사에있는사람.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();
const logTable = new Map();
const result = [];

for(let i = 0; i < input.length; i++){
    const [name, log] = input[i].split(' ');
    if(logTable.get(name)){
        logTable.delete(name);
        logTable.set(name, 0);
    }else{
        logTable.set(name,1)
    }
}

for(const [key,value] of logTable){
    if(value) result.push(key)
}

result.sort((a,b) => {
    if(a<b) return 1;
    if(a>b) return -1;
    return 0;
})

console.log(result.join('\n'))