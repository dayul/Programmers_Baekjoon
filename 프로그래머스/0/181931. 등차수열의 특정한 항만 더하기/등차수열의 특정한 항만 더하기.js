function solution(a, d, included) {
    // reduce로 현재 값(cur)이 true이면 맞는 항을 계산에 누적
    // var answer = included.reduce((acc, cur, idx) => {
    //    return cur ? acc + a + d * idx : acc; 
    // }, 0);
    
    // map()
    var answer = 0;
    included.map((v, idx) => {
        if(v) answer += a + d * idx;
    })
    
    return answer;
}