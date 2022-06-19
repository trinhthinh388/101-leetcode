/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

// @lc code=start
/**
 * Using Brute Force
 * Time: O(n ^ 2)
 * Space: O(n)
 */

/**
 * Using Heap, Sort
 * Time: O(nLog(n))
 * Space: O(n)
 */

/**
 * Using Quick select
 * Time: O(n) average, worst O (n ^ 2)
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  k = nums.length - k;
  function quickselect(l, r) {
    const pivot = nums[r];
    let p = l;
    for (let i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
        p++;
      }
    }
    [nums[r], nums[p]] = [nums[p], nums[r]];

    if (p > k) return quickselect(l, p - 1);
    else if (p < k) return quickselect(p + 1, r);
    return nums[p];
  }

  return quickselect(0, nums.length - 1);
};
// @lc code=end
