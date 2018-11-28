/*
 * [28] Implement strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (36.14%)
 * Total Accepted:    24.8K
 * Total Submissions: 68.7K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 *
 * 示例 1:
 *
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 *
 * 说明:
 *
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 *
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    if (haystack === '' && needle) return -1;
    let H = haystack.length;
    let N = needle.length;
    let h = 0;
    let n = 0;
    while (h < H && n < N) {
        if (haystack[h] === needle[n]) {
            h++;
            n++;
        } else {
            h++;
            h -= n;
            n = 0;
        }
    }
    if (n === N) {
        return h - n;
    } else {
        return -1;
    }
};
