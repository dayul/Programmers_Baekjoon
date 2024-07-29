function solution(s) {
    // 문자열 내림차순 정렬하기
    // var answer = [...s].sort((a, b) => b > a ? 1 : -1).join("");
    
    // reverse()
    var answer =  s.split("").sort().reverse().join("");
    return answer;
}