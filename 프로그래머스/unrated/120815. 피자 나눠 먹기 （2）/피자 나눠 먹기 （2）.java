class Solution {
    public int solution(int n) {
        int answer = 0;

            while(true) {
                int slice = 0;
                answer++;
                slice = answer * 6;
                
                if(slice % n == 0) {
                    break;
                }
            }

        return answer;
    }
}