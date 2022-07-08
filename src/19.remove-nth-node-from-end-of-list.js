/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const arr = [];
  let currentNode = head;
  while (currentNode) {
    arr.push(currentNode);
    currentNode = currentNode.next;
  }
  if (arr.length === n && n > 1) return arr[1];

  n = arr.length - n;

  if (n <= 0) return null;
  arr[n - 1].next = arr[n + 1] || null;
  return head;
};
// @lc code=end
