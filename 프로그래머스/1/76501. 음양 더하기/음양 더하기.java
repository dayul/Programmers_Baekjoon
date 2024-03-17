class Solution {
    public int solution(int[] absolutes, boolean[] signs) {
        int answer = 0;
        int minus = -1;
        
        for(int i = 0; i < signs.length; i++) {
            minus = (signs[i] == true) ? 1 : -1; 
            absolutes[i] *= minus;
            
            answer += absolutes[i];
        }
        
        return answer;
    }
}