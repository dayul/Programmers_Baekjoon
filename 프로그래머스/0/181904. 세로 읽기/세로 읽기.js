function solution(my_string, m, c) {
    var answer = '';
    
    // c번째부터 시작하므로 index는 0부터 시작 => c - 1
    // i가 m씩 증가하면서 c번째 열 요소값이 됨
    for(let i = c-1; i < my_string.length; i += m) {
        answer += my_string[i];
    }
    
    return answer;
}