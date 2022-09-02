/**
 * Problem: https://leetcode.com/problems/merge-k-sorted-lists/
 * Difficulty: Medium
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  const headNode = new ListNode();
  let currentNode = headNode;
  const allElms = [];
  for (let i = 0; i < lists.length; i++) {
    let linkedList = lists[i];
    while (linkedList) {
      allElms.push(linkedList?.val);
      if (linkedList) linkedList = linkedList.next
    }
  }
  const sortedElms = allElms.sort((a, b) => a - b);
  sortedElms.forEach(elm => {
    currentNode.next = new ListNode(elm);
    currentNode = currentNode.next;
  })
  return headNode.next;
};