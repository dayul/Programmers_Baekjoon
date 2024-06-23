function solution(str_list, ex) {
    let answer = str_list.filter((a) => {
        if(a.includes(ex)) return false;
        else return true;
    });
    
    return answer.join("");
}