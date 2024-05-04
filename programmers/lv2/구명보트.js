// function solution(people, limit) {
//     people.sort((a,b) => a - b);
//     let peopleCopy = [...people]
//     let count = 0;
//     let curruntLimit = limit;
    
//     people.forEach(weight => {
//         while(peopleCopy.length > 0){
//             peopleCopy.shift()
//             curruntLimit -= weight;
//             const remain = peopleCopy.find(weight => curruntLimit >= weight)

//             if(!remain){
//                 count++;
//                 curruntLimit = limit;
//                 break;
//             }
//         }
//     })
    
//     return count
// }

