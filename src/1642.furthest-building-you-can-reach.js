/*
 * @lc app=leetcode id=1642 lang=javascript
 *
 * [1642] Furthest Building You Can Reach
 */

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

// @lc code=start
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  const maxHeap = new MaxPriorityQueue((a) => a);

  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i] >= heights[i + 1]) continue;

    bricks -= heights[i + 1] - heights[i];
    maxHeap.enqueue(heights[i + 1] - heights[i]);

    if (bricks < 0) {
      bricks += maxHeap.dequeue().element;
      if (ladders > 0) ladders--;
      else return i;
    }
  }

  return heights.length - 1;
};
// @lc code=end
