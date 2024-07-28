class Solution {
    public boolean solution(String s) {
        // 문자열의 길이에 따라 초깃값을 정함
        boolean answer = s.length() == 4 || s.length() == 6 ? true : false;
        
        // 문자열 길이 조건에 충족한다면 if문으로 들어감
        if(answer) {
            for(int i = 0; i < s.length(); i++) {
                // 문자열 각 자리를 char로 변환
                char c = s.charAt(i);
                
                // 변환값이 숫자에 해당되지 않으면 false 저장, break;
                if(Character.isDigit(c) == false) {
                    answer = false;
                    break;
                }
            }
        }
        
        return answer;
    }
}