/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      let rightVal = Infinity;
      let downVal =
        i === grid.length - 1 && j === grid[i].length - 1 ? 0 : Infinity;

      if (i + 1 < grid.length) {
        downVal = grid[i + 1][j];
      }
      if (j + 1 < grid[i].length) {
        rightVal = grid[i][j + 1];
      }
      console.log(i, j, rightVal, downVal);
      grid[i][j] = Math.min(rightVal, downVal) + grid[i][j];
    }
  }
  console.log(grid);
  return grid[0][0];
};
// @lc code=end
