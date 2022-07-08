/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0;
  const rows = grid.length - 1;
  const cols = grid[0].length - 1;

  function dfs(i, j) {
    let lands = 0;
    if (i > rows || j > cols) return 0;
    if (grid[i][j] === '1') {
      grid[i][j] = '0';
      lands += 1;
    }

    // Top
    if (i - 1 >= 0 && grid[i - 1][j] !== '0') {
      lands += dfs(i - 1, j);
    }

    // Right
    if (j + 1 <= cols && grid[i][j + 1] !== '0') {
      lands += dfs(i, j + 1);
    }

    // Bottom
    if (i + 1 <= rows && grid[i + 1][j] !== '0') {
      lands += dfs(i + 1, j);
    }

    // Left
    if (j - 1 >= 0 && grid[i][j - 1] !== '0') {
      lands += dfs(i, j - 1);
    }

    return lands;
  }
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
      if (grid[i][j] === '0') continue;
      const lands = dfs(i, j);
      result += lands > 0 ? 1 : 0;
    }
  }

  return result;
};
// @lc code=end
