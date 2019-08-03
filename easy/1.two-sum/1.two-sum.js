/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 方法一：暴力法

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target - nums[i] === nums[j]) {
                return [i, j];
            }
        }
    }
    console.log("No two sum solution");
};


// 方法二：两遍哈希表

var twoSum = function(nums, target) {
    // 构造哈希表
    var map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let j = 0; j < nums.length; j++) {
        let complement = target - nums[j];
        if (map.has(complement) && map.get(complement) !== j) {
            return [j, map.get(complement)];
        }
    }
    console.log("No two sum solution");
};


// 方法三：一遍哈希表

var twoSum = function(nums, target) {
    // 构造哈希表
    var map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    console.log("No two sum solution");
};
