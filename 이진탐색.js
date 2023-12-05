/* 
이진탐색
원소가 정렬되어 있는 배열에서 특정한 값을 찾아내는 알고리즘. (정렬된 리스트에만 사용 가능)
탐색을 진행할때마다 탐색범위가 절반으로 줄어들어 속도가 빠르다

'업다운게임'
상대방의 임의의 숫자 63을 생각하고 1~100사이 수다 라고 말했을때
50말하면 up
7말하면 down...
63을 말하면 정답.

중간값과 찾고자하는 값을 비교하여 왼쪽을 탐색할지 오른쪽을 탐색할지 결정.
1. 중간값 선택
2. 중간값과 찾고자 하는 값(target) 비교
3. target이 중간에 있는 값보다 크면 중간값을 기준으로 우측의 원소들을 대상으로 탐색
4. 계손 2~3 반복
*/
function binarySearch(arr,target){
    let start = 0;
    let end = arr.length - 1;

    // 0 1 2 3
    // floor는 0이되고 ceil은 1이 되기때문에 순서가 다르게됨..
    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        console.log(`start: ${start} mid: ${mid} end: ${end}`)
        if(arr[mid] === target){
            return mid
        }
        if(arr[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return start
}


let target = 5;
// let target = 7;
// let target = 2;
// let target = 0;
let arr = [1,3,5,6];
let idx = binarySearch(arr,target)
console.log(idx)