import java.util.*;

public class Solution {
    public int solution(int n) {
        int answer = 0;

        while(n > 0) {
            answer += n % 10;
            // 일의 자리 수 구해서 더하기
            n /= 10;
            // 일의 자리 수 사라짐
        }

        return answer;
    }
}