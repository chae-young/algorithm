function solution(new_id) {
    let answer = ''

    answer = new_id.replace(/[A-Z]/g, c => c.toLowerCase());
    answer = answer.replace(/[^a-z0-9._-]/gi, '');
    answer = answer.replace(/\.{2,}/g, '.');
    answer = answer.replace(/^\.+/, '');
    answer = answer.replace(/\.+$/, '');

    if(!answer) answer = "a"
    if(answer.length >= 16) {
        answer = answer.slice(0, 15);
        answer = answer.replace(/\.+$/, '');
    }
    if(answer.length <= 2) {
        for(let i = answer.length; i < 3; i++) {
            answer += answer.slice(-1);
        }
    }

    return answer;
}