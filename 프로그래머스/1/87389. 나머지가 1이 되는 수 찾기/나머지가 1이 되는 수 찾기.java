class Solution {
    public int solution(int n) {
        int answer = n;
        for(int i = 1; i <= 1000000; i++) {
            if(n % i == 1) {
                if(i < answer)
                    answer = i;
            }
        }
        
        return answer;
    }
}