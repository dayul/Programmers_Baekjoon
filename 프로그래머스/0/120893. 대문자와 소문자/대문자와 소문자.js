function solution(my_string) {
    var answer = '';
    my_string.split("").filter(a => {
        if(a == a.toUpperCase()) {
            answer += a.toLowerCase();
        }
        else {
            answer += a.toUpperCase();
        }
    })
    
    return answer;
}