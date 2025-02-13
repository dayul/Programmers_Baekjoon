function solution(participant, completion) {
    var answer = '';
    var com = new Map();
    
    // 완주자 이름별로 카운트하기 ({완주자 : count})
    for(c of completion) {
        com.set(c, (com.get(c) || 0) + 1);
    }
    
    // 참가자 나올 때마다 카운트 - 1
    for(p of participant) {
        if(com.has(p) && com.get(p) > 0)
            com.set(p, com.get(p) - 1);
        else answer = p;
    }
    
    return answer;
}