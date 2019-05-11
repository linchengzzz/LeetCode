/*
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (25.29%)
 * Total Accepted:    46.2K
 * Total Submissions: 182.8K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var asc = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0,
        H: 0,
        I: 0,
        J: 0,
        K: 0,
        L: 0,
        M: 0,
        N: 0,
        O: 0,
        P: 0,
        Q: 0,
        R: 0,
        S: 0,
        T: 0,
        U: 0,
        V: 0,
        W: 0,
        X: 0,
        Y: 0,
        Z: 0,
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '0': 0,
        '!': 0,
        '"': 0,
        '#': 0,
        $: 0,
        '%': 0,
        '&': 0,
        "'": 0,
        ')': 0,
        '(': 0,
        '[': 0,
        ']': 0,
        '{': 0,
        '}': 0,
        '*': 0,
        '.': 0,
        '+': 0,
        ',': 0,
        '~': 0,
        '-': 0,
        '/': 0,
        ':': 0,
        ';': 0,
        '<': 0,
        '>': 0,
        '=': 0,
        '?': 0,
        '@': 0,
        _: 0,
        '|': 0,
        '^': 0,
        '`': 0,
        ' ': 0,
        '\\': 0,
    };
    var n = s.length,
        r = 0,
        a = 0;
    for (let i = 0; i < n; i++) {
        a = asc[s.charAt(i)] > a ? asc[s.charAt(i)] : a;
        r = r > i - a + 1 ? r : i - a + 1;
        asc[s.charAt(i)] = i + 1;
    }
    return r;
};
