import java.util.ArrayList;
import java.util.List;

class Solution {
    public String[] solution(String[] todo_list, boolean[] finished) {
        ArrayList<String> answerList = new ArrayList<String>();
        
        for(int i = 0; i < todo_list.length; i++) {
            if(!finished[i])
                answerList.add(todo_list[i]);
        }
        
        String[] answer = new String[answerList.size()];
        // 배열로 변환
        answer = answerList.toArray(answer);
        
        return answer;
    }
}