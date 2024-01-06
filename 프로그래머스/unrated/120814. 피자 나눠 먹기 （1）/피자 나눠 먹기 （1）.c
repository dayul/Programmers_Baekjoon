#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 1;
    
    if(n > 7) {
        if(n % 7 == 0) {
            answer = n / 7;
        }
        else  {
            answer = n / 7;
            answer++;
        }   
    }
    
    return answer;
}