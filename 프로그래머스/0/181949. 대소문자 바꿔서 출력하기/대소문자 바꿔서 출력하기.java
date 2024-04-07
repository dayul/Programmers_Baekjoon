import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        String result = "";
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        
        for(int i = 0; i < a.length(); i++) {
            if(Character.isLowerCase(a.charAt(i))) 
                result += Character.toUpperCase(a.charAt(i));
            else
                result += Character.toLowerCase(a.charAt(i));
        }
        System.out.println(result);
    }
}