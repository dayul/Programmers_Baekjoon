#include <stdio.h>
int main() {
 /*   4 
long int
-----------
20
long long long long long int */
    int n;
    scanf("%d", &n);
    for(int i = 1; i <= n; i += 4) {
        printf("long ");
    }
    printf("int");
        
}