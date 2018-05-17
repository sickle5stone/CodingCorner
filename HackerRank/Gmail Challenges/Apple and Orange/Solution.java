import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the countApplesAndOranges function below.
    static void countApplesAndOranges(int s, int t, int a, int b, int[] apples, int[] oranges) {
        int appleTreeFromHse = s - a;
        int orangeTreeFromHse = t - b;
        int sFromOrange = s - b;
        int tFromApple = t - a;
        
        int appleCount = 0;
        int orangeCount = 0;
        
        for (int i : apples){
            if (i>=appleTreeFromHse && i <= tFromApple){
                appleCount++;
            }
        }
        for (int y : oranges){
            if (y<=orangeTreeFromHse && y >= sFromOrange){
                orangeCount++;
            }
        }
        
        System.out.println(appleCount);
        System.out.println(orangeCount);

    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        String[] st = scanner.nextLine().split(" ");

        int s = Integer.parseInt(st[0]);

        int t = Integer.parseInt(st[1]);

        String[] ab = scanner.nextLine().split(" ");

        int a = Integer.parseInt(ab[0]);

        int b = Integer.parseInt(ab[1]);

        String[] mn = scanner.nextLine().split(" ");

        int m = Integer.parseInt(mn[0]);

        int n = Integer.parseInt(mn[1]);

        int[] apple = new int[m];

        String[] appleItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < m; i++) {
            int appleItem = Integer.parseInt(appleItems[i]);
            apple[i] = appleItem;
        }

        int[] orange = new int[n];

        String[] orangeItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int orangeItem = Integer.parseInt(orangeItems[i]);
            orange[i] = orangeItem;
        }

        countApplesAndOranges(s, t, a, b, apple, orange);

        scanner.close();
    }
}
