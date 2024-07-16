class Solution {
    public String solution(String s) {
        // 문자열 s의 중앙 인덱스를 구함
        int mid = s.length() / 2;
        
        // 먼저 초기화
        String answer = s.substring(mid, mid + 1);
        
        // 2로 나누었을 때 0인, 짝수이면
        if(s.length() % 2 == 0) {
            // 중간 인덱스의 앞부터 그 뒤 한개까지 포함
            answer = s.substring(mid - 1, mid + 1);
        }
        
        return answer;
    }
}