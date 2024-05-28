function solution(a, b) {
    let answer = Number(a.toString() + b.toString());
    let ab2 = a * b * 2;
    
    answer = answer < ab2 ? ab2 : answer;
    
    return answer;
}