def solution(arr, delete_list):
    answer = list(filter(lambda a: a not in delete_list, arr))
    return answer