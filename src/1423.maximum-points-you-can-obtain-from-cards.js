/*
 * @lc app=leetcode id=1423 lang=javascript
 *
 * [1423] Maximum Points You Can Obtain from Cards
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let sum = 0;

  let firstSum = 0;
  let i = 0;
  while (i < k) {
    firstSum += cardPoints[i];
    i++;
  }

  sum = firstSum;
  let j = cardPoints.length - 1;

  while (j > cardPoints.length - k - 1) {
    firstSum -= cardPoints[i - 1];
    firstSum += cardPoints[j];
    sum = Math.max(sum, firstSum);
    j--;
    i--;
  }

  return sum;
};
// @lc code=end
