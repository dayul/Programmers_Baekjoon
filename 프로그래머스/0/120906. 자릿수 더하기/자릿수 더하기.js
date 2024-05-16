function solution(n) {
    var answer =  n.toString().split('').reduce((a, b) => Number(a)+ Number(b),0);

    return answer;
}