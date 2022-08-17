/**
 * * Problem: https://leetcode.com/problems/merge-two-sorted-lists/
 * Difficulty: Easy
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 const mergeTwoLists = (list1, list2) => {
  // 儲存結果的ListNode
  let result = new ListNode(0);
  // 目前Node位置
  let current = result;

  while(list1 !== null && list2 !==null){
      // list1,list2較小的數加入result
      if(list1.val > list2.val){
          current.next = list2;
          list2 = list2.next;
      } else {
          current.next = list1;
          list1 = list1.next
      }
      current = current.next;
  }

  //將list1,list2剩下的Node加到result
  if(list1 !== null){
      current.next = list1;
  }

  if(list2 !== null){
      current.next = list2;
  }
  return result.next;
};