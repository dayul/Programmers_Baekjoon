function solution(nums) {
    var answer = 0;
    var arr = [...new Set(nums)];
    
    answer = Math.min(nums.length / 2, arr.length)

    return answer;
}