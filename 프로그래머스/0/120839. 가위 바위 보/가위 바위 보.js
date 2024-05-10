function solution(rsp) {

    // 1. forEach() 사용 - 전개구문 대신 split() 사용 가능
    // var answer = '';
    // [...rsp].forEach(num => {
    //     if(num === '2')   answer += 0;
    //     else if(num === '0')   answer += 5;
    //     else if(num === '5')   answer += 2;
    // })
    
    // 객체 활용, map() 사용
    let arr = {
        2 : 0,
        0 : 5,
        5 : 2
    }
    
    var answer = [...rsp].map(i => arr[i]).join('');
    
    return answer;
}