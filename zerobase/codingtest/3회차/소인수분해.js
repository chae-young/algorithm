/* 주어진 두개의 수를 소인수 분해 했을때 공통된 소수의 집합을 가지고 있는지 판단하는 함수를 작성하세요.

예를들어  12, 6 은 두 수 모두 2와 3으로만 이루어져 공통된 소수 집합을 가지고 있습니다.
9, 18의 경우 9는 3으로 이루어져 있으며, 18은 2, 3으로 이루어져 있기 때문에 공통 소수 집합이 아닙니다.

입력
 1 ~ 10000 사이의 정수 A, B

출력
 공통된 소수 집합인 경우 1, 아니면 0

 2. 9 => 3,3


매개변수 : int A, int B
리턴타입 : int */
// A와 B를 소인수분해하고. 그 둘이 공통된 소수의 집합을 가지고 있는지 판단해라.
// ** 소인수분해: 1이 될때까지 나누는수. 작은수부터

//그러니까 A,B의 최대공약수를 구하고
//A를 소인수 분해할때  A,B의 최대공약수로 계속 A를 나누면 A와B의 소인수분해에서 공통된 소수가 있는지 없는지 나온다는거잖아

function GCD(a, b){
    if (b == 0){
      return a;
    } else{
      return GCD(b, a%b);
    }
}
  
  function solution(A, B){
    var gcd = GCD(A, B); // A,B의 최대공약수.
    var gcdA = 0;
    var gcdB = 0;

    // 소인수분해
    while (gcdA != 1){
      gcdA = GCD(A, gcd); // a와 최대공약수 사이의 현재 최대공약수
      console.log(gcdA)
      A = A / gcdA
      console.log('A:',A)
    }
    // 소인수분해
    while (gcdB != 1){
      gcdB = GCD(B, gcd);
      B = B / gcdB;
    }
  
    if (A == 1 && B == 1){
      return 1;
    }
    else{
      return 0;
    }
  }
  
  console.log(solution(9, 18))

  // 12: 2,2,312 6: 2,3