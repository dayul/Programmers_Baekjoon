class Solution {
    public int solution(int[] numbers) {
        int answer = numbers[0] * numbers[1];
        
        for(int i : numbers) {
            for(int j : numbers) {
                
                if(i == j)  continue;
                
                if(answer < i * j) {
                    answer = i * j;
                }
            }
        }
        
        return answer;
    }
}