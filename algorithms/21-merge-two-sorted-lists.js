/**
 * Problem: https://leetcode.com/problems/merge-two-sorted-lists/
 * Difficulty: Easy
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Solution: https://ithelp.ithome.com.tw/articles/10246209
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

let mergeTwoLists = (l1, l2) => {
  // 創建一個暫時的node作為串列的起始點
  let current = new ListNode(0);

  // 將最後需回傳的串列指向這個ListNode物件
  let returnList = current;

  // sum為加總，carry用來處理進位值
  let sum,
    carry = 0;

  // 判斷l1和l2是否為null(即遍歷到串列的尾部節點了)，或carry有進位值待處理
  while (l1 || l2 || carry > 0) {
    sum = 0; // init sum 
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next; // l1作為變數，其指向替換為下一個節點
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next; // l2作為變數，其指向替換為下一個節點
    }
    sum += carry; // 記得加上carry進位

    // 第一次迴圈current代表開始時new ListNode(0)物件，利用%計算餘數並將next指向這個新建的node
    current.next = new ListNode(sum % 10);

    // 記得current只是一個變數，此處將current指向上述新建的node，第二次回圈後就可以進行上述同樣的操作
    current = current.next;

    // carry count 若大於9則進位
    carry = sum > 9 ? 1 : 0;
  }

  // 最後returnList指向的ListNode(0)物件會因上式不斷的增加新節點，故我們只需回傳剔除ListNode(0)的串列，也就是next所指向的node
  return returnList.next;
};