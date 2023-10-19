/* 
삽입정렬
새로원 원소를 이전까지 정렬된 원소사이에 삽입 시키는 알고리즘.
두번째수부터 시작!
1회전:
두번째 원소가 첫번째~첫번째 원소까지의 원소들과 비교하며 정렬될 위치로 이동.
1회전후 두번째 원소까지 정렬된 상태 유지
2회전:
세번째 원소가 첫번째~두번째 원소까지의 원소들과 비교하며 정렬될 위치로 이동.
2회전후 세번째 원소까지 정렬된 상태 유지
3회전:
네번째 원소가 첫번째~세번째 원소까지의 원소들과 비교하며 정렬될 위치로 이동.
3회전후 4번째 원소가지 정렬된 상태 유지

원소가 이미 정렬되어 있는 경우 시간복잡도 o(n)
역순일 경우... o(n^2)
*/



class InsertSort {
    sort(data){
        let len = data.length;

        // 두번째 원소 부터 시작
        for(let i = 1; i < len; i++){
            let target = data[i];
            let targetIdx = i;

            for(let j = i - 1; j >= 0 && data[j] > target; j--){
                console.log(j)
                targetIdx = j;
                data[j+1] = data[j]
            }
            data[targetIdx] = target
        }
        return data
    }
}

const insertSort = new InsertSort();
let arr3 = [3, 30, 34, 5, 9];
let sotredArr3 = insertSort.sort(arr3);
console.log(sotredArr3)