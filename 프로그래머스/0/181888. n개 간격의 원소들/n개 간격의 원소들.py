def solution(num_list, n):
    # 1.
    # answer = []
    # for i in range(0, len(num_list), n):
    #     answer.append(num_list[i])

    # 2. 슬라이싱
    answer = num_list[::n]
    
    return answer