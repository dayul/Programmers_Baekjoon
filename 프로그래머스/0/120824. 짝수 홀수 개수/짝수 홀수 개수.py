def solution(num_list):
    answer = [0,0]
    
    # for i in num_list:
    #     if(i % 2 == 0):  answer[0] +=  1
    #     else:    answer[1] +=  1
    
    # 천재적인 코드
    for i in num_list:
        answer[i%2] += 1
    
    return answer