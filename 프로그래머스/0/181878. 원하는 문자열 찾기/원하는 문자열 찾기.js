function solution(myString, pat) {
    var answer = 0;
    
    // 두 문자 모두 대문자로 통일 한 후 indexOf로 검색
    if(myString.toUpperCase().indexOf(pat.toUpperCase()) != -1) {
        answer = 1;
    } 
    
    return answer;
}