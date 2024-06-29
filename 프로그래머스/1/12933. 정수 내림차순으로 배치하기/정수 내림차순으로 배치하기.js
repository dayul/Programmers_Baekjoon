function solution(n) {
    var answer = 0;
    n = n.toString();
    
    answer = [...n].sort((a, b) => {
        a = Number(a);
        b = Number(b);
        return b - a;
    })
    
    return Number(answer.join(""));
}