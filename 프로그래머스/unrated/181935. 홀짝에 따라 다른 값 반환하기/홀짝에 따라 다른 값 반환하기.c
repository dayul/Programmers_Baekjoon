#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
    int OddSum = 0, EvenSum = 0;
    
    for(int i = 1; i <= n; i++) {
            if(i % 2 == 1)  OddSum += i;
            else    EvenSum += i*i;
    }
    
    if(n % 2 == 1) {
        answer =  OddSum;
    }
    else {
        answer = EvenSum;
    }
    return answer;
}