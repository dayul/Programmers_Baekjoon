function solution(arr) {
    var answer = [];

    // arr에서 가장 작은 값(indexOf)을 삭제
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    answer = arr;
    
    // 빈 배열이면 [-1], 아니면 arr을 리턴
    return answer.length === 0 ? [-1] : arr;
}