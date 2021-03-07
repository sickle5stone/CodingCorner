public class Solution{

    public static void main(String[] args){

        //Robot
        int robotX = 0;
        int robotY = 0;

        boolean left = false;
        boolean right = false;
        boolean front = true;
        boolean back = false;

        String[] moves = new String[6];
        moves[0] = "GLGLGLG";
        moves[1] = "GLLG";
        moves[2] = "GGGGL";
        moves[3] = "GRGRGRG";
        moves[4] = "GRRG";
        moves[5] = "GGGGR";

        for (String s : moves){
            for (int i = 0;i<s.length();i++){
                if (s.charAt(i) == 'G'){
                    if (front){
                        robotY++;
                    }else if (right){
                        robotX++;
                    }else if (left){
                        robotX--;
                    }else if (back){
                        robotY--;
                    }
                }else if (s.charAt(i) == 'L'){
                    if (front){
                        left = true;
                        front = false;
                    }
                    else if (left){
                        back = true;
                        left = false;
                    }
                    else if (back){
                        right = true;
                        back = false;
                    }
                    else if (right){
                        front = true;
                        right = false;
                    }
                }else if (s.charAt(i) == 'R'){
                    if (front){
                        right = true;
                        front = false;
                    }
                    else if (right){
                        back = true;
                        right = false;
                    }
                    else if (back){
                        left = true;
                        back = false;
                    }
                    else if (left){
                        front = true;
                        left = false;
                    }
                }
            }
            System.out.println(robotX == 0 && robotY ==0);
            robotX = robotY = 0;
            left = right = back = false;
            front = true;
        }        
    }



    }

