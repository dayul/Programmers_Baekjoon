def solution(array):
    answer = 0
    
    array.sort()
    
    # 1.
    # len(array) / 2를 하면 소수점까지 나오므로
    # int()를 사용해서 정수로 변환
    # answer = array[int(len(array) / 2)]
    
    # 2. // 사용하기 (정수값을 보여줌)
    answer = array[len(array) // 2]

    return answer