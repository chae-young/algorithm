// 비동기
function sub(num1,num2){
    const promisTest = new Promise((resolve,reject) => {
        if(num1 > num2) resolve(num1 - num2)
        else resolve(num2 - num1)
    })

    return promisTest
}

function promisTest(){
    return sub(19,20)
    .then(result => {
        if(result < 0){
            return sub(19,20)
            .then(result => console.log(result))
        }else{
            console.log(result)
        }
    })
}

promisTest()


async function promiseAsync(){
    try{
        const result = await sub(10,20)
        if(result < 0){
            const result2 = await sub(10,20)
            console.log(result2)
        }else{
            console.log(result)
        }
    }catch(error){
        console.log(error)
    }
}