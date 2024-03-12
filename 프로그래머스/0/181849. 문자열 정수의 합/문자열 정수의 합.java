class Solution {
    public int solution(String num_str) {
        int answer = 0;
        String answer_str[] = num_str.split("");
        
        for(int i = 0 ; i < answer_str.length; i++) {
            answer += Integer.parseInt(answer_str[i]);
        }
        
        return answer;
    }
}