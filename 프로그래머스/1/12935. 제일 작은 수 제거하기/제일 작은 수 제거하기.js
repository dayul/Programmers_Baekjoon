function solution(arr) {
    var answer = [];
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    answer = arr.length > 0 ? arr : [-1];
    
    return answer;
}