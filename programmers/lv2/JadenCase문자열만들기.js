//단어의 첫문자가 대문자 그 외는 소문자.
//첫문자가 알파벳이 아니면 소문자로!
//jadenCase로 리턴해라!!

//무조건 다 소문자로 바꾼다.
//단어의 첫글자만 대문자로 바꾼다.


function solution(s) {

    s = s.toLowerCase();
    let sArr = s.split(' ');
    
    for(let i = 0; i < sArr.length; i++){
        sArr[i] = sArr[i].charAt(0).toUpperCase() + sArr[i].slice(1);
    }
    
    return sArr.join(' ')
}

/* ----다른 풀이----- */

function solution2(s){
   return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.subString(1).toLowerCase()).join(" ")
}


