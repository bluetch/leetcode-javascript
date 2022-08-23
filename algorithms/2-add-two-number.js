

/**
 * Problem: https://leetcode.com/problems/add-two-numbers/
 * Difficulty: Medium
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function (l1, l2) {

  var answer = null // 指向list最新的node
  var head = null; // 指向list第一個node (最終結果)
  var sum = 0; // 
  var val = 0; // 
  var carry = 0; // 進位
  while (l1 || l2 || carry) {
      sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = parseInt(sum / 10);
      val = sum % 10;
      if (head) {
          // 新增list node
          answer.next = new ListNode(val);
          answer = answer.next;
      } else {
          // 建立list第一個 node
          answer = new ListNode(val);
          head = answer;
      }

      if (l1) l1 = l1.next; // next node
      if (l2) l2 = l2.next; // next node
  }

  return head;
};


// Non-empty linked list
// Two non-negative int (-1, 1.5)
// const addTwoNumbers = (l1, l2) => {
//   let p1 = l1,
//     p2 = l2,
//     num1 = 0,
//     num2 = 0,
//     carry = 0,
//     solution = new ListNode(0);
//   current = solution;

//   while (p1 || p2) {
//     num1 = (p1) ? p1.val : 0;
//     num2 = (p2) ? p2.val : 0;

//     if (num1 + num2 + carry > 9) {
//       current.next = new ListNode(num1 + num2 + carry - 10);
//       current = current.next;
//       carry = 1;
//     } else {
//       current.next = new ListNode(num1 + num2 + carry);
//       current = current.next;
//       carry = 0;
//     }

//     if (p1) p1 = p1.next;
//     if (p2) p2 = p2.next;

//   }
//   if (carry) current.next = new ListNode(carry);
//   return solution.next;
// };

// 342
// 465
// ----
// 807