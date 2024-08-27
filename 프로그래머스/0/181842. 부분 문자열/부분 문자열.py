def solution(str1, str2):
    answer = 0
    
    # 부분 문자열일 경우 2개이상으로 나눠짐
    str = str2.split(str1)

    # 2개 이상일 경우 1 저장
    if len(str) > 1 :
        answer = 1
    
    return answer