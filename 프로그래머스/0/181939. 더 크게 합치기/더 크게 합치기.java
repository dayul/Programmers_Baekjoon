class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        // int를 String으로 변환 후 문자열 더하기
        String ab = String.valueOf(a) + String.valueOf(b);       
        String ba = String.valueOf(b) + String.valueOf(a);
        // String을 int로 변환
        int intab = Integer.parseInt(ab);
        int intba = Integer.parseInt(ba);
        
        if(intab > intba) {
            
            answer = intab;
        }
        else {
            answer = intba;
        }
        
        return answer;
    }
}