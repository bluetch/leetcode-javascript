

/**
 * Problem: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Difficulty: Medium
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head; // 預留第一個Node就是要移除的Node
  let walk = dummy;
  let count = 0;

  for (let i = 1, countWalk = head; countWalk; i++, countWalk = countWalk.next)
    count++;

  while (walk) {
    if ((n - count) === 0)
      walk.next = walk.next.next; // pass this node
    else
      walk = walk.next;
    count--;
  }
  return dummy.next;
};