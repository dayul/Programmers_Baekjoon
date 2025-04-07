function solution(s){
    const stack = [];
    
    for(let n of s) {
        if(n === '(') stack.push(")");
        else if(n === ')') {
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    
    return stack.length > 0 ? false : true;
}