const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for (let i = 1; i < input.length; i++) {
  const [floors, rooms, clientNum] = input[i].split(' ').map((num) => parseInt(num));
  const floorNo = clientNum % floors;
  const roomNo = Math.ceil(clientNum / floors);
  result += `${floorNo === 0 ? floors : floorNo}${roomNo < 10 ? 0 : ''}${roomNo}\n`;
}

console.log(result.trim());