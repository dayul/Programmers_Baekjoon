function solution(my_string) {
    var answer = [];
    
    // 공백은 false이므로 반환되지 않음, 값만 출력
    answer = my_string.split(" ").filter(a => a);
    
    
    return answer;
}