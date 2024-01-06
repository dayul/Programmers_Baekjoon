import java.util.Arrays;

class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        
        Arrays.sort(sides);
        // 배열을 오름차순으로 정렬해서 저장해줌
        
        if(sides[2] < sides[0] + sides[1])
            answer = 1;
        else 
            answer = 2;
        
        return answer;
    }
}