// function solution(d, budget) {
//     // 다 구매가능할 때, 먼저 초깃값 지정
//     var answer = d.length;
    
//     // 적은 예산부터 사용
//     d.sort((a, b) => a - b);

//     for(let i = 0; i < d.length; i++) {
//         budget -= d[i];
        
//         if(budget < 0) {
//             answer = i;
//             break;
//         }
//     }

//     return answer;
// }

// 다른 풀이 : true - 1, false - 0 이용
function solution(d, budget) {
    return d.sort((a, b) => a - b)
        .reduce((count, price) => count + ((budget -= price) >= 0), 0);
    // 0보다 같거나 클 때만 해당
}
