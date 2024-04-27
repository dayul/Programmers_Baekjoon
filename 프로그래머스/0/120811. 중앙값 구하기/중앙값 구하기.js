function solution(array) {
    var answer = 0;
    
    array.sort((a, b) => {
        return a - b;
    })
    
    len = Math.trunc(array.length / 2);
    
    answer = array[len];
    return answer;
}