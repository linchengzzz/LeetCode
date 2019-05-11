/*
 * [344] Reverse String
 *
 * https://leetcode-cn.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (63.19%)
 * Total Accepted:    24.7K
 * Total Submissions: 39.1K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，其作用是将输入的字符串反转过来。
 *
 * 示例 1:
 *
 * 输入: "hello"
 * 输出: "olleh"
 *
 *
 * 示例 2:
 *
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: "amanaP :lanac a ,nalp a ,nam A"
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s
        .split('')
        .reverse()
        .join('');
};
