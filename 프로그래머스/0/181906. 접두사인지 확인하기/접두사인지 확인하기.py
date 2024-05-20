def solution(my_string, is_prefix):
    answer = 0
    index = len(is_prefix)
    
    if my_string[:index] == is_prefix:
        answer += 1
    
    return answer