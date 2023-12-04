#include <stdio.h>
int main() {
    int N, v, answer = 0;
    int input[100];
    
    scanf("%d\n", &N);
    for(int i = 0; i < N; i++) {
        scanf("%d\n", &input[i]);
    }
    
    scanf("%d\n", &v);
    for(int i = 0; i < N; i++) {
        if(input[i] == v)    answer++;
    }
    printf("%d", answer);
    return 0;
}