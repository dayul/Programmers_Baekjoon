function solution(array) {
    var answer = 0;
    
    // 오름차순 정렬
    array.sort((a, b) => {      
        return a - b;
    })
    
    // 배열 길이를 2로 나누고, 정수부분만 저장
    len = Math.trunc(array.length / 2);
    
    answer = array[len];
    return answer;
}