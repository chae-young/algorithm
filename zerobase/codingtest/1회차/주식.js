// 배열 A는 십만전자의 일단위 주식가격이 들어있습니다.
// 해당 주식 가격 기준으로 매수와 매도를 1회씩 진행했을때 가능한 최대 수익을 구하는 함수를 작성하세요.

// 이때 매도는 항상 매수 이후에 이루어지며 수익을 낼수 없는 경우 0을 리턴하세요.

// 입력
//  주식의 일단위 주가 정보 배열 A

// 출력
//  최대 수익 값


// 매개변수 : int[] A
// 리턴타입 : int


function solution(A) {
    let maxPrice = 0;
    let minPrice = Math.min(...A);
    let minIdx = A.indexOf(minPrice);
    let maxIdx = 0;

    for(let i = 0; i <= A.length; i++){
        if(maxPrice < A[i]){
            maxPrice = A[i];
            maxIdx = A.indexOf(A[i])
        }
    }

    // console.log(minPrice,maxIdx,minIdx)

   return (maxIdx < minIdx) ? 0 : maxPrice - minPrice
}

// console.log(solution( [100000, 99000, 99000, 98000, 97000] ))
// console.log(solution( [100000, 99000, 99000, 98000, 97000, 110000] ))
// console.log(solution( [10000, 50000, 70000, 30000, 60000, 110000] ))
// console.log(solution( [100, 50, 150, 100, 200] ))
// console.log(solution( [10000, 10000, 10000, 10000] ))



// 입력 : [100000, 99000, 99000, 98000, 97000]
// 출력 : 0

// 입력 : [100000, 99000, 99000, 98000, 97000, 110000]
// 출력 : 13000

// /*
// 97000에 사서 110000에 팔수 았다.
// */

// 입력 : [10000, 50000, 70000, 30000, 60000, 110000]
// 출력 : 100000

// 입력 : [100, 50, 150, 100, 200]
// 출력 : 150

// 입력 : [10000, 10000, 10000, 10000]
// 출력 : 0


/*-----------풀이------------ */
function solution2(A)
{
  var result = [];

  for (var i = 0; i < A.length - 1; i++){
    for (var j = i + 1; j < A.length; j++){
      if (A[i] < A[j]){
        result.push(A[j] - A[i]);
      }
    }
  }

  return result.length == 0 ? 0 : Math.max.apply(null, result);
}

// console.log(solution2( [100000, 99000, 99000, 98000, 97000] ))
console.log(solution2( [100000, 99000, 99000, 98000, 97000, 110000] ))
// console.log(solution2( [10000, 50000, 70000, 30000, 60000, 110000] ))
// console.log(solution2( [100, 50, 150, 100, 200] ))
// console.log(solution2( [10000, 10000, 10000, 10000] ))