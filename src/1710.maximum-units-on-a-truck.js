/*
 * @lc app=leetcode id=1710 lang=javascript
 *
 * [1710] Maximum Units on a Truck
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let result = 0;

  let i = 0;

  while (truckSize > 0 && i < boxTypes.length) {
    const boxes = Math.min(boxTypes[i][0], truckSize);
    result += boxes * boxTypes[i][1];
    truckSize -= boxTypes[i][0];
    i++;
  }
  return result;
};
// @lc code=end
