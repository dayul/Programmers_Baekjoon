def solution(s):
    answer = True
    # 내가 해결한 방법
#     p = 0
#     y = 0
    
#     for i in s.lower():
#         if(i == 'p'):
#             p += 1
#         elif(i == 'y'):
#             y += 1

#     answer = (p == y)

    # 다른 사람이 해결한 방법
    answer = s.lower().count('p') == s.lower().count('y')
    return answer