/*
 * [141] Linked List Cycle
 *
 * https://leetcode-cn.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (29.88%)
 * Total Accepted:    16.3K
 * Total Submissions: 54.6K
 * Testcase Example:  '[]\nno cycle'
 *
 * 给定一个链表，判断链表中是否有环。
 *
 * 进阶：
 * 你能否不使用额外空间解决此题？
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let a = head;
    let b = head.next;
    while (b !== null) {
        if (a === b) {
            return true;
        }
        b = b.next;
        if (b === null) return false;
        a = a.next;
        b = b.next;
    }
    return false;
};
