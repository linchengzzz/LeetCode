/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (44.20%)
 * Total Accepted:    12.1K
 * Total Submissions: 27.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = 0 + a;
    b = 0 + b;
    let la = a.length;
    let lb = b.length;
    let c = 0;
    let str = '';
    while (la - 1 || lb - 1) {
        let ret = ~~a[la - 1] + ~~b[lb - 1] + c ;
        if (ret >= 2) {
            str = ret - 2 + str;
            c = 1;
        } else {
            str = ret + str;
            c = 0;
        }
        la - 1 && (la --);
        lb - 1 && (lb --);
    }
    c && (str = c + str);
    return str;
};

console.log(addBinary("11", "1"));