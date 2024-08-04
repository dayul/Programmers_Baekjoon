function solution(arr) {
    var answer = [];
    
    answer = arr.filter((a, i) => arr[i] != arr[i + 1]);
    
    return answer;
}