class Solution {
    public int solution(int n, int t) {
        int answer = n;
        int hour = 1;
        
        for(int i = n; hour <= t; n *= 2) {
            answer *= 2;
            hour++;
        }
        return answer;
    }
}