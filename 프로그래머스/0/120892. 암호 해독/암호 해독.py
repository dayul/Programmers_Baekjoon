def solution(cipher, code):
    answer = ''
    
    # 1.
    # for i in range(code, len(cipher) + 1):
    #     if i % code == 0:
    #         answer += cipher[i - 1]
    
    # 2.
    # for i in range(code - 1, len(cipher), code):
    #     answer += cipher[i]
    
    # 3. 슬라이싱을 이용한 방법 : a[시작:끝:증가]
    answer = cipher[code-1::code]

    return answer