/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

const {
  MaxPriorityQueue,
  MinPriorityQueue,
} = require('@datastructures-js/priority-queue');

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const odd = new MaxPriorityQueue((a) => a);
  const even = new MinPriorityQueue((a) => a);
  nums.forEach((n) => {
    if (n % 2 === 0) {
      even.enqueue(n);
    } else {
      odd.enqueue(n);
    }
  });

  return [
    ...even.toArray().map((e) => e.element),
    ...odd.toArray().map((e) => e.element),
  ];
};
// @lc code=end
