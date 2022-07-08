/*
 * @lc app=leetcode id=1465 lang=javascript
 *
 * [1465] Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 */

// @lc code=start
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, hc, vc) {
  hc.sort((a, b) => a - b);
  vc.sort((a, b) => a - b);
  let maxh = Math.max(hc[0], h - hc[hc.length - 1]),
    maxv = Math.max(vc[0], w - vc[vc.length - 1]);
  for (let i = 1; i < hc.length; i++) maxh = Math.max(maxh, hc[i] - hc[i - 1]);
  for (let i = 1; i < vc.length; i++) maxv = Math.max(maxv, vc[i] - vc[i - 1]);
  return (BigInt(maxh) * BigInt(maxv)) % 1000000007n;
};
// @lc code=end
