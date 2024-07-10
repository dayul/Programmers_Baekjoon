function solution(str1, str2) {
    var answer = str1.split("").map((str, i) => str + str2.slice(i, i+1)).join("");
    
    return answer;
}