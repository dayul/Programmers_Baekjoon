function solution(n) {
    var answer = [];
    
    for(let i of n.toString()) {
        answer.push(Number(i));
    }
    
    return answer.reverse();
}