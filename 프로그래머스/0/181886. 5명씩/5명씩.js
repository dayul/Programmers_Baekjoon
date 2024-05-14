function solution(names) {
    var answer = [];
    
    // idx값만 사용
    answer = names.filter((value, idx) => idx % 5 === 0)

    // indexOf()도 가능
    // answer = names.filter(value => names.indexOf(value) % 5 === 0)
    
    return answer;
}