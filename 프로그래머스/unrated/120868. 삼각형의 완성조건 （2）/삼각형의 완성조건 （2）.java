class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        
        int max = sides[0] > sides[1] ? sides[0] - sides[1] : sides[1] - sides[0];
        int sum = sides[0] + sides[1];
        
        for(int i = max + 1; i < sum; i++) {
            answer++;
        }
        
        return answer;
    }
}