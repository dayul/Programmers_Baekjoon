function solution(A,B){
    let answer = 0;
    
    // 초깃값을 구하기 위해, 오름차순과 내림차순으로 각각 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    // acc의 초깃값 0 꼭 설정하기
    answer = A.reduce((acc, cur, i) => acc += cur * B[i], 0);
    
    return answer;
}