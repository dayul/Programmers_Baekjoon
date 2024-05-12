def solution(n):
    # 1.for문 사용, append()
    # answer = []
    # for i in range(1, n+1, 2):
    #     answer.append(i)
    
    # 2. 한줄에 작성, +2 하는 방법
    # answer = [i for i in range(1, n+1, 2)]
    
    # 3. 한줄에 작성, if문
    answer = [i for i in range(n+1) if i%2]
    
    return answer