def solution(n, numlist):
    answer = []
    
    # 1.
    # for i in numlist:
    #     if i % n == 0:
    #         answer.append(i)
    
    # 2. 한번에 쓰기
    answer = [i for i in numlist if i % n == 0]
    
    return answer