function answer(score) {
   console.log(score)
   return (score.reduce( (acc,val) => acc+val,0) / score.length).toFixed(2);
}

/*main code*/
let input = [
    [80,95,65,70,100],
    [82,77,51,64,73,90,80],
    [100,71,59,88,72,75,91,93]
]

for(let i = 0; i < input.length; i++){
    console.log(`#${i + 1} ${answer(input[i])}`);
}