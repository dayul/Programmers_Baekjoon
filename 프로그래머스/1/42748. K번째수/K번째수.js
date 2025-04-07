function solution(array, commands) {
    var answer = [];
    
    for(let [i, j, k] of commands) {
        let newArr = array;
        
        newArr = newArr.slice(i - 1, j);
        newArr = newArr.sort((a, b) => a - b);
        
        answer.push(...newArr.slice(k - 1, k));
    }
    
    return answer;
}