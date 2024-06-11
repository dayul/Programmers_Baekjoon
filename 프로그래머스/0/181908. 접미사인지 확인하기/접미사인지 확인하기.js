function solution(my_string, is_suffix) {
    var answer = 0;
    
    let len = my_string.length - is_suffix.length;
    if(my_string.slice(len) === is_suffix) {
        answer = 1;
    }
    
    
    return answer;
}