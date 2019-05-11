/*
 * [125] Valid Palindrome
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (35.78%)
 * Total Accepted:    15.9K
 * Total Submissions: 44.4K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 示例 1:
 *
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "race a car"
 * 输出: false
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === '') return true;
    s = s.toLocaleLowerCase();
    let s1 = '';
    let s2 = '';
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if (/\w/.test(s[i])) {
            s1 += s[i];
        }
        if (/\w/.test(s[len - 1 - i])) {
            s2 += s[len - 1 - i];
        }
    }
    return s1 === s2;
};
