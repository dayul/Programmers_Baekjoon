import java.util.Scanner;
class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        /* 1. x > 0 && y > 0
           2. x < 0 && y > 0
           3. x < 0 && y < 0
           4. x > 0 && y < 0
        */
        if(x > 0 && y > 0)
            System.out.println("1");
        else if(x < 0 && y > 0)
            System.out.println("2");
        else if(x < 0 && y < 0)
            System.out.println("3");
        else
            System.out.println("4");
    }
}