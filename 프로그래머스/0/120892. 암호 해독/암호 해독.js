function solution(cipher, code) {
    return [...cipher].filter((str,idx) => {
        if((idx+1) % code === 0) {
            return str;
        }
    }).join('')
}