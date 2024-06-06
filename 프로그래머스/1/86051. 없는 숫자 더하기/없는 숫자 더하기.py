def solution(numbers):
    # 1. 내가 푼 방법
#     answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
#     for i in numbers:
#         if i in answer : 
#             answer.remove(i)
#     return sum(answer)

    # 천재적인 방법
    return 45 - sum(numbers)
    
    