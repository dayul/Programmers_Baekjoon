function solution(n) {
    var answer = 0;
    
    // toString() 함수 이용
    n =  n.toString(3).split("").reverse().join("");
    console.log(n);
    
    answer = parseInt(n, 3);
    
    
    return answer;
}