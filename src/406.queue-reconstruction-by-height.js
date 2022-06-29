/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const result = [];
  people.sort((a, b) => (b[0] !== a[0] ? b[0] - a[0] : a[1] - b[1]));

  people.forEach((person) => {
    const h = person[0];
    let k = person[1];
    result.splice(k, 0, [...person]);
  });
  return result;
};
// @lc code=end
