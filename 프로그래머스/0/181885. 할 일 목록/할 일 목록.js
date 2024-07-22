function solution(todo_list, finished) {
    // 마치지 못한 일을 return 해야하므로 !(NOT)
    var answer = todo_list.filter((a, i) => !finished[i]);
    return answer;
}