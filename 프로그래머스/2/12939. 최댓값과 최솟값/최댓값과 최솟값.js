function solution(s) {
    var answer = '';
    
    // 공백으로 문자열을 나누고 정수로 변환한 새 배열을 저장
    answer = s.split(" ").map(a => parseInt(a));
    
    // 최댓값과 최솟값을 구해 answer에 문자열 형태로 저장
    answer = Math.min(...answer) + " " + Math.max(...answer);
    
    return answer;
}