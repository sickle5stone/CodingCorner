	/*
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/

	public static int height(Node root) {
      	// Write your code here.
        
        if (root == null){
            return 0;
        }
        
        int left = 0;
        int right = 0;
        
        //has left
        if (root.left != null){
            left = 1 + height(root.left);      
        };
        
        //has right
        if (root.right != null){
            right = 1 + height(root.right);
        }
        
        return left >= right ? left : right;
    }
