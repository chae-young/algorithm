function solution(n, lost, reserve) {

	var num = new Array(n).fill(1);

	num.forEach(function(el,i){
		i += 1;
		if(reserve.includes(i)){
			num[i-1] += 1
		}
		if(lost.includes(i)){
			num[i-1] -= 1
		}
	})

	num.forEach(function(el,i,arr){
		if(el === 2){
			if(arr[i-1] === 0){
				arr[i-1]++
				arr[i]--
			}else if(arr[i+1] === 0){
				arr[i+1]++
				arr[i]--
			}
		}	
	})

	num = num.filter(function(el){
		return el > 0
	})

	return num.length
}