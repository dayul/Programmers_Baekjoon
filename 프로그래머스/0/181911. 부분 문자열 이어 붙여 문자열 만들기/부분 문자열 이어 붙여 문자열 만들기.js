function solution(my_strings, parts) {
    var answer = '';
    
    // 1. for문 사용
//     for(let i = 0; i < my_strings.length; i++) {
//         // 시작과 끝 인덱스를 저장
//         let start = parts[i][0];
//         let end = parts[i][1];
        
//         // 문자열을 순회하며 문자열을 누적
//         answer += my_strings[i].substring(start, end + 1);
//     }
    
    // 2. reduce() 사용
    // 초깃값을 지정하지 않을 경우 acc의 값이 my_string[0]으로 초기화 됨
    // 그러므로 "" 빈 문자열로 초깃값을 지정함
    answer = my_strings.reduce((acc, cur, i) => {
        let start = parts[i][0];
        let end = parts[i][1];
        
        return acc += cur.substring(start, end + 1);
    }, "");
    
    
    return answer;
}