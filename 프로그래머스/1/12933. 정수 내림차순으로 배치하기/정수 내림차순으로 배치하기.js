function solution(n) {
    var answer = 0;
    // 문자로 형변환
    n = n.toString();
    
    // 전개 연산자로 배열로 변환 후 내림차순 sort
    answer = [...n].sort((a, b) => {
        a = Number(a);
        b = Number(b);
        return b - a;
    })
    
    return Number(answer.join(""));
}