// 내 풀이
// function solution(s) {
//     let answer = [];
    
//     // 공백을 기준으로 배열 생성
//     let str = s.split(" ");
    
//     // 나눈 문자열이 담긴 배열에서 맨 첫 글자만 대문자로 변경해 answer에 push
//     for(let str1 of str)
//         answer.push([...str1].map((a, i) => i === 0 ? a.toUpperCase() : a.toLowerCase()).join(""));
    
//     // 배열을 문자열로 변환
//     return answer.join(" ");
// }

// 다른 풀이 : for문을 사용하지 않고 맨 앞자리만 대문자로 변경
function solution(s) {
    return s.split(" ").map(v => v.substring(0, 1).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}