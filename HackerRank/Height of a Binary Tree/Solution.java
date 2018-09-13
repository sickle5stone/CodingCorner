public class Solution {

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
	
	public static Node insert(Node root, int data) {
        if(root == null) {
            return new Node(data);
        } else {
            Node cur;
            if(data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            } else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int t = scan.nextInt();
        Node root = null;
        while(t-- > 0) {
            int data = scan.nextInt();
            root = insert(root, data);
        }
        scan.close();
        int height = height(root);
        System.out.println(height);
    }	
}