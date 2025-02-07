function solution(s){
    var answer = false;
    let count = 0;
    
    for(a of s.split("")) {
        // ( 이 나왔을 때 ++
        if(a === '(') count++;
        
        // ) 이 나왔을 때 --
        else {
            count--;
            // -- 를 했을 때 count가 음수면 false 반환
            if(count < 0) return false;
        }
    }
    
    // 최종적으로 괄호 순서가 맞고, 개수가 맞으면 true
    if(count === 0) answer = true; 
    
    return answer;
}