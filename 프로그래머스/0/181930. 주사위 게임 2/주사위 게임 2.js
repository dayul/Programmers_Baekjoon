function solution(a, b, c) {
    var answer = (a + b + c) * (a ** 2+ b ** 2 + c ** 2);
    
    if(a === b && a === c && b === c)
        answer = (a + b + c) * (a ** 2+ b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
    
    else if(a !== b && b !== c && a !== c) 
        answer = a + b + c;

    return answer;
}