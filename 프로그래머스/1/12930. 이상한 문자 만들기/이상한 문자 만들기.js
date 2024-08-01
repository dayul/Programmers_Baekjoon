function solution(s) {
    let answer = [];
    // 공백을 기준으로 문자열을 나눔
    s = s.split(" ");
    
    // arrow function에 {}가 있다면 return을 써야함(보통 2줄 이상)
    // 없다면 생략
    for(let str of s)
        answer.push(str.split("").map((a, i) =>  i % 2 == 0 ? a.toUpperCase() : a.toLowerCase()).join(""));

    answer = answer.join(" ");
    
    return answer;
}