const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N,K] = input.shift().split(' ');

const countries = input.map((v) => {
    const info = v.split(' ')
    return {
        id: info[0],
        gold: info[1],
        sliver: info[2],
        bronze: info[3]
    }
})

countries.sort((a,b) => {
    if(a.gold !== b.gold) return b.gold - a.gold
    if(a.sliver !== b.sliver) return b.sliver - a.sliver
    return b.bronze - a.bronze 
})


// k국가가 몇등했는지
const ranking = Array(N).fill(0);
let currentRank = 1;
let jointRank = 0

for(let i = 0; i < N; i++){
    if(i > 0 && countries[i].gold === countries[i - 1].gold &&
        countries[i].sliver === countries[i - 1].sliver &&
        countries[i].bronze === countries[i - 1].bronze
    ){
        ranking[i] = currentRank - 1
        jointRank++
    }else{
        currentRank += jointRank
        ranking[i] = currentRank
        currentRank++
    }
}

const Krank = countries.findIndex((v) => v.id == K)
console.log(ranking[Krank])
