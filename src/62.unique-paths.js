/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const mem = {};
  function dfs(i, j) {
    if (i < 0 || j < 0 || i > m - 1 || j > n - 1) return 0;
    if (i === m - 1 || j === n - 1) return 1;
    if (mem[`${i}-${j}`]) return mem[`${i}-${j}`];

    const down = dfs(i + 1, j);
    const right = dfs(i, j + 1);

    mem[`${i}-${j}`] = down + right;

    return down + right;
  }

  return dfs(0, 0);
};
// @lc code=end
