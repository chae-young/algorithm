function getStr(str){
    let sliceStr = [];
    let resultStr = 0;

    for(let i = 0; i < str.length; i++){
        //중복되어 있지 않으면
        if(sliceStr.indexOf(str[i]) === -1){
            sliceStr.push(str[i])
            if(resultStr < sliceStr.length){
                resultStr - sliceStr.length
            }

        }else{
            //이미 저장된 문자열에서 중복된ㅌ 문자부터 제외하고
            sliceStr = sliceStr.slice( sliceStr.indexOf(str[i]) + 1 )
            //현재문자 추가.
            sliceStr.push(str[i])
        }
    }

    return resultStrㅐ
}
getStr('helloworld')