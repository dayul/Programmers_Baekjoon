def solution(s):
    answer = []
    dict = {}       # 나온 문자들의 마지막 위치(인덱스)를 저장하기 위한 딕셔너리
    
    for i, char in enumerate(s):
        if char not in dict:                # 해당 문자가 처음 나왔을 때
            answer.append(-1)
        else: 
            answer.append(i - dict[char])   # 나온 적이 있다면
                                            # 현재 인덱스 - 전에 나온 인덱스로 차이를 계산
            
        dict[char] = i          # 현재 문자의 마지막 인덱스를 저장
    
    return answer