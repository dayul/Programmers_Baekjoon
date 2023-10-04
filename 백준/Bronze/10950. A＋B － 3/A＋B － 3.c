#include <stdio.h>
int main() {
    int a, b, T;
    scanf("%d", &T);
    for(int i = 1; i <= T; i++) {
        scanf("%d %d", &a, &b);
        printf("%d\n", a+b);
    }
}