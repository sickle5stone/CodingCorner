import java.util.ArrayList;

public class Solution{

    public static void main(String[] args){

        int deno[] = {1, 2, 5, 10, 20, 50, 100, 500, 1000};
        // int n = sizeof(deno)/sizeof(deno[0]);

        int question = 93 //Input here

        ArrayList<Integer> ans = new ArrayList<>();
        
        for (int i = deno.length-1 ; i > 0; i++){
            int denoToDeduct = deno[i];
            if (denoToDeduct < question){
                question =- deno[i];
            }
        }

        
    }
}

