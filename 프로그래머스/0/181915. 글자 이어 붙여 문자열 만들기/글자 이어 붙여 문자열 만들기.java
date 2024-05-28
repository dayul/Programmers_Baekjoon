class Solution {
    public String solution(String my_string, int[] index_list) {
        String answer = "";
        
        for(int i = 0; i < index_list.length; i++) {
            int idx = index_list[i];
            answer += my_string.substring(idx, idx+1);
        }
        
        return answer;
    }
}