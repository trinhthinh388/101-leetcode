/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

const mem = {};
var climbStairs = function (n) {
  if (n === 0 || n === 1) return 1;

  if (mem[n]) return mem[n];

  const one = climbStairs(n - 1);
  const second = climbStairs(n - 2);

  mem[n] = one + second;

  return one + second;
};
// @lc code=end
