function solution(my_string) {
    var answer = [];
    
    answer = my_string.split(" ").filter(a => { return a !== '' });
    
    
    return answer;
}