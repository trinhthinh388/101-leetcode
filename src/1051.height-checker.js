/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const sortedArr = [...heights].sort((a, b) => a - b);

  let diffs = 0;
  for (let i = 0; i < heights.length; i++) {
    if (sortedArr[i] !== heights[i]) diffs++;
  }
  return diffs;
};
// @lc code=end
