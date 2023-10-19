/* 
거품정렬
인접한 두 원소를 비교하여 정렬하는 알고리즘.
2개의 원소를 비교해서 크기가 순서대로 되어있지않으면 서로 교환
정렬 회차마다 가장 큰값이 해당 회차에서 갈 수 있는 오른쪽 끝으로 이동하는 과정

메모리 공간 o(1)
시간 복잡도는 높다.

가장 큰 원소가 1회전에서 끝나면 맨끝에 이동하므로 고정.
2회전에서도 반복...
*/

class BubbleSort {
    sort(data){
        let len = data.length;
        // swap이 발생하지 않는다면 모두 정렬된것이니 버블소트를 진행하지 않아도 됨.
        let isSwap = false;
        for(let i = 0; i < len; i++){
            isSwap = true;
            for(let j = 0; j < len - i - 1; j++){ // 1회전에서는 뒤에 고정되있음 2회전부터는 뒤에 안봐도 되므로
                if(data[j] > data[j + 1]){
                    [data[j],data[j+1]] = [data[j+1],data[j]]
                    isSwap = true;
                }
            }
            if(!isSwap){
                break;
            }
        }
        return data
    }
}

const bubbleSort = new BubbleSort();
let arr = [28,10,14,7,9,30];
let sotredArr = bubbleSort.sort(arr);
//console.log(sotredArr)

/* 
선택정렬
가장 작은 원소를 선택하여 정렬하는 알고리즘.
각 회차마다 원소를 넣을 위치가 정해져 있고 그 위치에 어떤 원소를 넣을지 선택하여 정렬하는 알고리즘.
시간복잡도 o(n2) 공간복잡도 o(1)

1회전에서 첫번째 원소부터 n번째 원소를 차례대로 비교후 가장 작은값 찾아서 첫번째 값과 교환.
-> 작은값이 가장 앞으로 이동
2회전에서 두번째 원소부터 n번째 원소를 차례대로 비교후 가장 작은값 찾아 두번째 값과 교환
-> 가장 앞 + 1로 이동
*/

class SelectionSort {
    sort(data){
        let len = data.length;
        // n-1은 마지막 데이터는 자동정렬 되므로
        for(let i = 0; i < len - 1; i++){
            let minIdx = i // i회전에 i번째 원소가 최솟값

            // 두번째부터 가야하니
            for(let j = i + 1; i < len; j++){
                if(data[minIdx] > data[j]){
                    minIdx = j
                }
            }
            [data[i],data[minIdx]] = [data[minIdx],data[i]]
        }
        return data
    }
}

const selectionSort = new SelectionSort();
let arr2 = [28,10,14,7,9,30];
let sotredArr2 = selectionSort.sort(arr);


