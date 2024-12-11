function solution(nums) {
    var answer = 0;
    // var arr = [...new Set(nums)];
    var arr = nums.filter((a, i) => nums.indexOf(a) === i);
    
    answer = Math.min(nums.length / 2, arr.length);

    return answer;
}