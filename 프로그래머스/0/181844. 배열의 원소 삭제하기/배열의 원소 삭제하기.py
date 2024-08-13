def solution(arr, delete_list):
    # answer = list(filter(lambda a: a not in delete_list, arr))
    
    answer = [i for i in arr if i not in delete_list]
    
    return answer