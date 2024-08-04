function solution(t, p) {
    let answer = 0;
    // 문자열을 추출할 수 있을만큼의 횟수를 계산 (+1을 해야 마지막까지 다 포함됨)
    let len = t.length - p.length + 1;
    
    for(let i = 0; i < len; i++) {
        // 문자열에서 한칸씩 앞으로 가며 문자열을 슬라이싱함
        // parseInt말고 +도 가능! (숫자로만 이루어진 문자열일때)
        let num = +(t.substring(i, p.length + i));
        
        if(num <= +p)
            answer++;
    }
    
    return answer;
}