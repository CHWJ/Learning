/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30104
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    for (let x = 0; x < nums.length; x++) {
        let shouldBreak = false;
        for (let y = x+1; y < nums.length; y++) {
            if(nums[x]+nums[y]==target){
                result.push(x,y);
                shouldBreak = true;
                break;
            }
        }
        if(shouldBreak){
            break;
        }
    }
    return result;
};
// @lc code=end



/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */

