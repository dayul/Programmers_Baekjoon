function solution(phone_number) {
    var answer = phone_number.slice(phone_number.length-4);
    // 마지막 4자리를 answer에 저장
    
    answer = answer.padStart(phone_number.length,"*");
    // 4자리를 제외한 앞 숫자들을 *로 채움
    
    return answer;
}