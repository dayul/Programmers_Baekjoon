function solution(phone_book) {
    var answer = true;
    
    // 뒤의 문자열만 비교할 수 있도록 먼저 정렬 (문자열 정렬)
    phone_book.sort();
    
    for(let i = 0; i < phone_book.length - 1; i++) {
        
        // 앞 문자열이 뒤 문자열의 접두사인지 확인
        if(phone_book[i + 1].indexOf(phone_book[i]) === 0)
            answer = false;
    }
    
    return answer;
}