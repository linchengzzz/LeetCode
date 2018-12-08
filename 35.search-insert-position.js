/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.59%)
 * Total Accepted:    20.1K
 * Total Submissions: 49.4K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 你可以假设数组中无重复元素。
 *
 * 示例 1:
 *
 * 输入: [1,3,5,6], 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: [1,3,5,6], 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 * 输入: [1,3,5,6], 7
 * 输出: 4
 *
 *
 * 示例 4:
 *
 * 输入: [1,3,5,6], 0
 * 输出: 0
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (isNaN(target)) return 0;
    if (target === nums[0]) return 0;
    if (target < nums[0]) {
        nums.unshift(target);
        return 0;
    }
    if (target === nums[nums.length]) return nums.length - 1;
    if (target > nums[nums.length]) {
        nums.push(target);
        return nums.length - 1;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const c = Math.ceil((left + right) / 2);
        if (target === nums[c]) return c;
        if (target < nums[c]) right = right === c ? c - 1 : c;
        if (target > nums[c]) left = c;
    }
    if (left >= right) nums.splice(left + 1, 0, target);
    return left + 1;
};
