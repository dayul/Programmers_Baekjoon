function solution(n, m) {
    var answer = [0, 0];
    
    // 크기를 비교하고 값을 swap
    if(n > m)
        [n, m] = [m, n];
    
    for(let i = 1; i <= m; i++) {
        if(n % i === 0 && m % i === 0) 
            answer[0] = i;
    }
    
    // 최소공배수는 n * m 곱하고 최대공약수로 나누면 됨
    answer[1] = (n * m) / answer[0];
    
    
    return answer;
}