function solution(s){
    var answer = true;
    var p = 0, y = 0;
    s = s.toLowerCase();
    
    for(var str of s) {
        if(str === 'p')   p++;
        else if(str === 'y')  y++;
    }
    
    answer = (p === y) ? true : false;

    return answer;
}