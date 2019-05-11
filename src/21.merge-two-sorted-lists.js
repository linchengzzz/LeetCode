/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (49.49%)
 * Total Accepted:    28.3K
 * Total Submissions: 57.1K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return [];
    if (!l1) return l2;
    if (!l2) return l1;
    let curNode;
    if (l1.val < l2.val) {
        curNode = l1;
        l1 = l1.next;
    } else {
        curNode = l2;
        l2 = l2.next;
    }
    let retNode = curNode;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curNode.next = l1;
            curNode = curNode.next;
            l1 = l1.next;
        } else {
            curNode.next = l2;
            curNode = curNode.next;
            l2 = l2.next;
        }
    }
    if (l1 === null) curNode.next = l2;
    if (l2 === null) curNode.next = l1;
    return retNode;
};
