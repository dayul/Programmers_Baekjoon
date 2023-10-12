import java.util.Scanner;
public class Main {
    public static void main(String args[]) {
        
        Scanner sc = new Scanner(System.in);
        int a_pay, b_count, sum = 0;
        int X_total = sc.nextInt();
        int N_type = sc.nextInt();
        
        for(int i = 1; i <= N_type; i++) {
            a_pay = sc.nextInt();
            b_count = sc.nextInt();
            
            sum += a_pay * b_count;
        }
        if(X_total == sum)    System.out.println("Yes");
        else    System.out.println("No");

    


    }
}