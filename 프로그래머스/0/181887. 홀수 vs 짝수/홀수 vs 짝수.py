def solution(num_list):
    evenSum = sum(num_list[::2])
    oddSum = sum(num_list[1::2])

    return max(evenSum, oddSum)