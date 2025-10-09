//Forma 1:
class Solution {
    public boolean isPalindrome(int x) {
        boolean isPalindrome = true;

        String str = String.valueOf(x);

        for (int i = 0; i < str.length() / 2; i++) {
            if (str.charAt(i) != str.charAt(str.length() - 1 - i)) {
                isPalindrome = false;
                break;
            }
        }

        return isPalindrome;
    }
}

//Forma 2:
class Solution {
    public boolean isPalindrome(int x) {
        String str = String.valueOf(x);

        String reversed = new StringBuilder(str).reverse().toString();
        return str.equals(reversed);
    }
}
