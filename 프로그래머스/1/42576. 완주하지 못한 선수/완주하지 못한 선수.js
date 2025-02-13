function solution(participant, completion) {
    var answer = '';
    var parti = new Map();
    
    // 참가자 이름별로 카운트하기 ({참가자 : count})
    for(p of participant) {
        if(parti.has(p)) {
            parti.set(p, parti.get(p) + 1);
        }
        else parti.set(p, 1);
        // parti.set(p, (parti.get(p) || 0) + 1);
    }
    
    // 완주자가 나올 때마다 카운트 - 1
    for(c of completion) {
        parti.set(c, parti.get(c) - 1);
    }
    
    // 남은 사람 찾기
    for([key, value] of parti) {
        if(value > 0) answer = key;
    }
    
    return answer;
}