function solution(n) {
    var answer = 0;
    
    // toString() 이용해 3진수로 변환
    // 배열로 나누어 앞뒤 반전하고 다시 문자열로 변환
    n = n.toString(3).split("").reverse().join("");
    
    // parseInt()로 3진수 -> 10진수 변환
    answer = parseInt(n, 3);
    
    
    return answer;
}