def solution(x, n):  
    answer = []
    for i in range(1, n+1):     # 횟수 : 1부터 n까지
        answer.append(x * i)    # x * i : x * 1, x * 2 ..
    
    # 한줄로 표현
    # answer[x * i for i in range(1, n+1)]
    
    return answer