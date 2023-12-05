// 일정한 금액을 지불 -> 10일동안 회원 자격
// 회원을 대상으로 매일 한가지 제품을 할인
// 할인제품은 하루에 하나씩
// 내가 원하는 제품과 수량이 할인하는 날짜와 10일 연속 일치할 경우.
// -> 회원가입

// 내가 원하는 제품을 모두 할인 받을수 있는 날짜?/
// 없으면 0
    

function solution(want, number, discount) {
    let answer = 0;

    for(let i = 0; i < discount.length; i++){
        const currentDayDiscount = discount.slice(i,10+i);
        // 할인 상품이 10개면
        if(!(currentDayDiscount.length < 10)) {
            for(let k = 0; k < want.length; k++){
                const product = want[k]
                const num = number[k]
                const todayCheck = currentDayDiscount.filter(pd => pd === product).length

                if(todayCheck != num) break
                if(k + 1 === want.length) answer += 1
            }
        }
    }
    return answer
}
