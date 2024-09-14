function solution(my_string, n) {
    // repeat() 사용으로 반복, 배열을 join()
    return my_string.split("").map(a => a.repeat(n)).join("");
}