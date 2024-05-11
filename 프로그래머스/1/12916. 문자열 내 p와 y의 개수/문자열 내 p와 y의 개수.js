function solution(s){
    var answer = true;
    var p = 0, y = 0;
    
    for(var str of s.toLowerCase()) {
        if(str === 'p')   p++;
        else if(str === 'y')  y++;
    }
    
    answer = p === y;

    return answer;
}