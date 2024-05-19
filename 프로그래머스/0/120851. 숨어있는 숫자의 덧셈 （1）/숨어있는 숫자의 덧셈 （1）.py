def solution(my_string):
    answer = 0
    
    # 1.
    # for i in my_string:
    #     if i.isdigit() :
    #         answer += int(i)
    
    # 2.
    answer = sum(int(i) for i in my_string if i.isdigit())
    
    return answer