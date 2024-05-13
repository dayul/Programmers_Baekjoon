function solution(cipher, code) {
    var answer = '';
    
    for(var i = code; i < cipher.length + 1; i += code){
        answer += cipher[i - 1];
    }
    
    return answer;
}