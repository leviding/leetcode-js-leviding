/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

/**
 * @param {number} x
 * @return {boolean}
 */

// 方法一：字符串法（题目要求不能使用此方法）

var isPalindrome = function(x) {
    let intToStr = 0;
    intToStr = x.toString;
    for (let i = 0; i < intToStr.length / 2; i++) {
        if (intToStr[i] !== intToStr[intToStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};


// 方法二：巧妙解法

var isPalindrome = function(x) {
    if (x < 0 || x % 10 === 0 && x !== 0) {
        return false;
    }
    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
    //return (x === revertedNumber || (x * 10 + revertedNumber % 10) === revertedNumber);
};
