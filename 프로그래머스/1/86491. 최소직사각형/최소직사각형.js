function solution(sizes) {
    const width = [];
    const height = [];

    // for문을 돌며 각각의 최댓값과 최솟값을 찾음
    // (가로 세로 상관없이 정렬하기 위함)
    for(let s of sizes) {
        let max = Math.max(s[0], s[1]);
        let min = Math.min(s[0], s[1]);
        width.push(max);
        height.push(min);
    }
    
    // 가로와 세로 각 값에서 최댓값을 곱해 return
    return Math.max(...width) * Math.max(...height);
}