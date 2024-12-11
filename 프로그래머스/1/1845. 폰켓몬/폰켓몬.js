function solution(nums) {
    var answer = 0;
    let n = nums.length / 2;
    
    var arr = [...new Set(nums)];
    
    if(arr.length > n) 
        answer = n;
    else 
        answer = arr.length;
    
    return answer;
}