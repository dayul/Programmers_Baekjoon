function solution(arr) {
    var answer = [];
    
    // 1. 내가 푼 방법
    // for(let i of arr) {
    //     for(let j = 1; j <= i; j++) {
    //         answer.push(i)
    //     }
    // }
    
    // 2. 함수 이용 방법
    answer = arr.reduce((a, c) => a.concat(Array(c).fill(c)), [])
    
    return answer;
}