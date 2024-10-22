function solution(numbers) {
    // Set() 자료형으로 중복 방지
    var answer = new Set();
    
    for(idx1 in numbers) {
        for(idx2 in numbers) {
            if(idx1 !== idx2) {
                answer.add(numbers[idx1] + numbers[idx2]);
            }
        }
    }
    
    // Array로 형변환하기
    answer = Array.from(answer).sort((a, b) => a - b);
    
    return answer;
}