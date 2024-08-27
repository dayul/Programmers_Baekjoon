def solution(num_list):
    evenSum = sum(num_list[::2])
    oddSum = sum(num_list[1::2])
    
    answer = evenSum if evenSum > oddSum else oddSum
    return answer