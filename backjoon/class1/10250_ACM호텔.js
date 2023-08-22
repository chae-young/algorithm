const fs = require('fs');
const input = fs.readFileSync(__dirname + '/10250_ACM호텔.txt').toString().trim().split("\n");
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [a,b] = input

const[count,...hotelinfo] = input;
let hotelarr = []

for(let i = 0; i < hotelinfo.length; i++){
    hotelarr = []
    let info = hotelinfo[i].split(' ');
    let h = info[0]
    let w = info[1]
    let people = info[2]
    let room = ''
    let check = 0

    for(let j = 1; j <= w; j++){//층
        hotelarr.push([])
        for(let k = 1; k <= h; k++){//호(층수만큼 있어야함)
            if(j < 10){
                room = (k+'') + 0 + (j+'')
            }else{
                room = (k+'') + (j+'')
            }  
            hotelarr[j-1].push(room)
            check++
            if(check == people){
                console.log(room)
            }
        }
    }
    //  console.log(hotelarr)
}




