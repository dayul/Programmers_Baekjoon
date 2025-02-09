function count_zero(num) {
    // 0의 개수를 카운트해서 반환
    return [...num].reduce((a, c) => c === '0' ? a + 1 : a, 0);
}

function solution(s) {
    var answer = [0, 0];
    
    while(s !== '1') {
        // 다른 분 방법 
        // - 정규표현식을 사용해서 0의 개수를 구함 (null 방지)
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
        
        // answer[1] += count_zero(s);     // 0의 개수 누적
        // s = s.replaceAll('0', '').length.toString(2);   // 0을 제외한 s의 길이를 이진변환
        answer[0]++;    // 변환했으므로 횟수 증가
    }
    
     return answer;
}