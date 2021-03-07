public class Hamming {
    private int length = 0;
    private String leftStrand;
    private String rightStrand;
    
    public Hamming(String leftStrand, String rightStrand) {
        this.leftStrand = leftStrand;
        this.rightStrand = rightStrand;
        checkStrands();
    }

    private void checkStrands() {
        if (leftStrand.length() != rightStrand.length()) {
            if (leftStrand.length() == 0) {
                throw new IllegalArgumentException("left strand must not be empty.");
            }
            else if (rightStrand.length() == 0){
                throw new IllegalArgumentException("right strand must not be empty.");
            }
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        }
    }

    public int getHammingDistance() {
        int hammingDistance = 0;
        for (int idx = 0; idx < leftStrand.length(); idx++) {
            if (leftStrand.charAt(idx) != rightStrand.charAt(idx)) {
                hammingDistance++;
            }
        }
        return hammingDistance;
    }
}
