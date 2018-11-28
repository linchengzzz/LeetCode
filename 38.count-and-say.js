/*
 * [38] Count and Say
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (45.37%)
 * Total Accepted:    14.5K
 * Total Submissions: 31.9K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 *
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 *
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 *
 * 注意：整数顺序将表示为一个字符串。
 *
 *
 *
 * 示例 1:
 *
 * 输入: 1
 * 输出: "1"
 *
 *
 * 示例 2:
 *
 * 输入: 4
 * 输出: "1211"
 *
 *
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    if (n === 2) return '11';
    let pre = '11';
    let ret = '';
    for (let i = 3; i <= n; i++) {
        let count = 1;
        ret = '';
        for (let j = 0; j < pre.length; j++) {
            if (pre[j] === pre[j + 1]) {
                count++;
            } else {
                ret += count;
                ret += pre[j];
                count = 1;
            }
        }
        pre = ret;
    }
    return ret;
};
