function solution(my_strings, parts) {
    var answer = '';
    
    for(let i = 0; i < my_strings.length; i++) {
        // 시작과 끝 인덱스를 저장
        let start = parts[i][0];
        let end = parts[i][1];
        
        // 문자열을 순회하며 문자열을 누적
        answer += my_strings[i].substring(start, end + 1);
    }
    
    return answer;
}