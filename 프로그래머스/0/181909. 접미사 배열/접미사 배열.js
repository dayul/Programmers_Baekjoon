function solution(my_string) {
    var answer = [];
    
    for(i in my_string) 
        answer.push(my_string.substring(i, my_string.length));
    
    answer.sort();
    
    return answer;
}