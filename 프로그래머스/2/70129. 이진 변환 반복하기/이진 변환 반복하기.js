function count_zero(num) {
    // 0의 개수를 카운트해서 반환
    return [...num].reduce((a, c) => c === '0' ? a + 1 : a, 0);
}

function solution(s) {
    var answer = [0, 0];
    
    while(s !== '1') {
        answer[1] += count_zero(s);     // 0의 개수 누적
        s = s.replaceAll('0', '').length.toString(2);   // 0을 제외한 s의 길이를 이진변환
        answer[0]++;    // 변환했으므로 횟수 증가
    }
    
     return answer;
}