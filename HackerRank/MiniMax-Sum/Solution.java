import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    /*
     * Complete the miniMaxSum function below.
     */
    static void miniMaxSum(int[] arr) {
        /*
         * Write your code here.
         */
        

        //!!! Long min/max value is much different from Integer ones :/
        long min = (long) Long.MAX_VALUE;
        long max = (long) Long.MIN_VALUE;
        long sum = (long) 0;
        
        for (int ignore = 0;ignore < arr.length;ignore++){
            sum = 0;
            for (int i = 0 ; i < arr.length; i++){
                if (i == ignore){
                }else{
                    sum+= (long) arr[i];
                }
            }
            if (sum < min){
                min = sum;
            }
            if (sum > max){
                max = sum;
            }
        }
        
        System.out.println(min + " " + max);

    }

    private static final Scanner scan = new Scanner(System.in);

    public static void main(String[] args) {
        int[] arr = new int[5];

        String[] arrItems = scan.nextLine().split(" ");

        for (int arrItr = 0; arrItr < 5; arrItr++) {
            int arrItem = Integer.parseInt(arrItems[arrItr].trim());
            arr[arrItr] = arrItem;
        }

        miniMaxSum(arr);
    }
}
