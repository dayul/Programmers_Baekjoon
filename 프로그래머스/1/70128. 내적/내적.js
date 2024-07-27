function solution(a, b) {
    
    // 1. reduce() : 누적 값 acc에 누적, 초깃값 0으로 설정
    // answer = a.reduce(((acc, cur, index) => acc += a[index] * b[index]), 0);
    
    // 2. reduce(), map() 
    // a[i]와 b[i]의 곱을 map()로 return하고 reduce()로 총합을 구함
    let answer = a.map((cur, index) => cur * b[index]).reduce((a, b) => a + b);
    
    return answer;
}