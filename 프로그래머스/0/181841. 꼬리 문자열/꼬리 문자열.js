function solution(str_list, ex) {
    let answer = str_list.filter((a) => !a.includes(ex)).join("");
    // a에 ex가 포함하지 않으면 join
    return answer;
}