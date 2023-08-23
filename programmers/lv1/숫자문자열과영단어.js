function solution(s) {
    let str = ''
    const word = {
        zero : 0,
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9
    }

    function strTest(){

        for(const num in word){
            str = ''
            if(s.indexOf(num) != -1){
                str += s.replace(num,word[num])
                s = str 
            }
        }
        if(isNaN(s)){
            strTest()
        }else{
            return
        }
    }
    strTest()

    return s*1
}


/* -------- 풀이 -------- */
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
