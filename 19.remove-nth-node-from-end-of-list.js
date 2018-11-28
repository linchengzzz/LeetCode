/*
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (30.32%)
 * Total Accepted:    20.5K
 * Total Submissions: 67.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 * 示例：
 *
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 *
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 *
 *
 * 说明：
 *
 * 给定的 n 保证是有效的。
 *
 * 进阶：
 *
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next) return null;
    let ret = [];
    let i = 0;
    ret[0] = head;
    while (ret[i].next) {
        ret[i + 1] = ret[i].next;
        i++;
    }
    if (ret.length === n) {
        return head.next;
    }
    ret[ret.length - n - 1].next = ret[ret.length - n].next;
    return head;
};
