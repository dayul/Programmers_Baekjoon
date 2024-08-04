function solution(arr) {
    var answer = [];
    
    answer = arr.filter((a, i) => {
        if(arr[i] != arr[i + 1]) {
            answer.push(a);
            // return 잊지 말기!
            return true;
        }
    });
    
    return answer;
}