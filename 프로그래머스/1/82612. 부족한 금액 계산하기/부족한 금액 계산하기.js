function solution(price, money, count) {
    var answer = 0;
    
    // 반복하며 필요한 총 금액을 계산
    for(let i = 1; i <= count; i++) {
        answer += price * i;
    }

    // 금액이 부족하지 않을 경우 0을, 아니면 필요한 돈에서 가지고 있는 돈을 빼서 부족한 금액을 구함
    // (부족한 금액이 음수여야 함)
    answer = (answer - money <= 0) ? 0 : answer - money;
    return answer;
}