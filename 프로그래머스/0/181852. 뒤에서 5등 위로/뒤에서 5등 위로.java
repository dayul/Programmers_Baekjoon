import java.util.Arrays;
class Solution {
    public int[] solution(int[] num_list) {
        // 5개를 제외하므로 제외한 만큼의 길이로 배열 생성
        int[] answer = new int[num_list.length - 5];
        
        // sort()로 오름차순 정렬
        Arrays.sort(num_list);
        
        // 앞의 5개의 값을 제외하고 배열에 저장
        for(int i = 0; i < answer.length; i++) {
            answer[i] = num_list[i + 5];
        }
        
        return answer;
    }
}