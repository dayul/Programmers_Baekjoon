function solution(arr1, arr2) {
    var answer = 0;
    
    // 1. 배열의 길이가 다를 때 처리
    if(arr1.length != arr2.length)  
        answer = arr1.length > arr2.length ? 1 : -1;
    
    // 2. 배열의 길이가 같을 때 처리
    else {
        // reduce()로 모든 원소의 합을 구함
        let a = arr1.reduce((acc, cur) => acc + cur);
        let b = arr2.reduce((acc, cur) => acc + cur);
        
        // 배열의 총합이 다르다면 .. 처리
        if(a != b)
            answer = a > b ? 1 : -1;
    }
    
    
    return answer;
}