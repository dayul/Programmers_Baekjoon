import java.util.Scanner;
public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int H = sc.nextInt();
        int M = sc.nextInt();
        
        if(M < 45) {    
            --H;
            M = (60 + M) - 45;
            if(H < 0)    H = 23;
        }
        else {
            M -= 45;
        }
        System.out.println(H + " " + M);
//10 10
//9 25
//예제 입력 
//0 30
//23 45
//예제 입력 
//23 40
//22 55

        
    }
}