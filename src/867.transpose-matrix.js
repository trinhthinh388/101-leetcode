/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const transposeArr = [];
  for (let c = 0; c < matrix[0].length; c++) {
    const arr = [];
    for (let r = 0; r < matrix.length; r++) {
      arr.push(matrix[r][c]);
    }
    transposeArr.push([...arr]);
  }
  return transposeArr;
};
// @lc code=end
