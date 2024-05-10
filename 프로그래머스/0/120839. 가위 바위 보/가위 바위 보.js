function solution(rsp) {
    var answer = '';
    
    // 전개구문 대신 split() 사용 가능
    [...rsp].forEach(num => {
        if(num === '2')   answer += 0;
        else if(num === '0')   answer += 5;
        else if(num === '5')   answer += 2;
    })
    
    return answer;
}