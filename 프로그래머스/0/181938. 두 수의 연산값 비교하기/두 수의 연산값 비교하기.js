function solution(a, b) {
    var answer = Number(a.toString() + b.toString());
    var ab2 = Number(a.toString()) * Number(b.toString()) * 2;
    
    if(answer < ab2) {
        answer = ab2;
    }
    
    return answer;
}