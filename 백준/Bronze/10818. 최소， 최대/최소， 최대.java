import java.util.Scanner;
public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int max = -1000001, min = 1000001, input;
        int N = sc.nextInt();
        
        for(int i = 0; i < N; i++) {
            input = sc.nextInt();
            if(max < input)    max = input;
            if(min > input)    min = input;
        }
        System.out.println(min + " " + max);
    }
}