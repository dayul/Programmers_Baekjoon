function solution(x) {
    
    let str = x.toString();
    
    // 문자열로 변환한 수를 reduce함수를 이용해 합을 구함
    let y = str.split("").reduce((a, c) => { return parseInt(a) + parseInt(c) })
    
    let answer = x % y == 0 ? true : false; 
    
    return answer;
}