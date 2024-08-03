function solution(a, b, c) {
    var answer = (a + b + c) * (a * a + b * b + c * c);
    
    if(a === b && a === c && b === c)
        answer = (a + b + c) * (a * a + b * b + c * c) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
    
    else if(a !== b && b !== c && a !== c) 
        answer = a + b + c;

    return answer;
}