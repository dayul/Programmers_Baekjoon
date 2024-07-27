function solution(a, b) {
    var answer = 1234567890;
    
    // 1. reduce() : 누적 값 acc에 누적, 초깃갑 0으로 설정
    answer = a.reduce(((acc, cur, index) => acc += a[index] * b[index]), 0);
    
    return answer;
}