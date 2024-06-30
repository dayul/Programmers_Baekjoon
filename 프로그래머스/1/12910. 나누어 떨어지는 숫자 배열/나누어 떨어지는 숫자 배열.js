function solution(arr, divisor) {
    var answer = [];
    
    // 조건에 맞는 요소만 filtering
    answer = arr.filter((a) => a % divisor === 0)
    
    // length가 0이라면 -1을 저장
    if(answer.length === 0) answer.push(-1);

    
    return answer.sort((a, b) => a - b);
}