import java.util.Arrays;
import java.util.Collections;

//leetcode submit region begin(Prohibit modification and deletion)
class Solution {
    public boolean isPalindrome(int x) {
       String str = String.valueOf(x);
       char[] arr = str.toCharArray();
       for (int i = 0; i < arr.length / 2; i++) {
           if (arr[i] != arr[arr.length - 1 - i]) {
               return false;
           }
       }
       return true;
    }
}
//leetcode submit region end(Prohibit modification and deletion)
