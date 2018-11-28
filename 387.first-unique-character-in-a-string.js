/*
 * [387] First Unique Character in a String
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (33.76%)
 * Total Accepted:    15.3K
 * Total Submissions: 45.3K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 *
 * 案例:
 *
 *
 * s = "leetcode"
 * 返回 0.
 *
 * s = "loveleetcode",
 * 返回 2.
 *
 *
 *
 *
 * 注意事项：您可以假定该字符串只包含小写字母。
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let temp = {};
    for (let i = 0; i < s.length; i++) {
        if (temp[s[i]]) {
            temp[s[i]] = 2;
        } else {
            temp[s[i]] = 1;
        }
    }
    for (let key in temp) {
        if (temp[key] === 1) {
            return s.indexOf(key);
        }
    }
    return -1;
};
