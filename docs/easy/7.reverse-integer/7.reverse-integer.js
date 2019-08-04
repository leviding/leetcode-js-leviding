/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */

// 方法一：数学方法
// * 不严谨的溢出判断
var reverse = function(x) {
    let result = 0;
    let value = Math.abs(x);
    while (value !== 0) {
        result = result * 10 + value % 10;
        value = Math.floor(value / 10);
    }
    result = x > 0 ? result : - result;
    return (result > Math.pow(2,31) - 1 || result < - Math.pow(2,31) ? 0 : result);
};

// * 严谨的溢出判断
var reverse = function(x) {
    let result = 0;
    let value = Math.abs(x);
    let MIN_VALUE = - Math.pow(2,31);
    let MAX_VALUE = Math.pow(2,31) - 1;
    while (value !== 0) {
        let pop = value % 10;
        // 溢出判断
        if (result > MAX_VALUE / 10 || (result === MAX_VALUE / 10) && pop > 7) return 0;
        if (result < MIN_VALUE / 10 || (result === MIN_VALUE && pop < -8)) return 0;
        result = result * 10 + pop;
        value = Math.floor(value / 10);
    }
    return (x >= 0 ? result : - result);
};


// 方法二：JavaScript 的 reverse() 方法

var reverse = function(x) {
    let coefficient = x >= 0 ? 1 : -1;
    let str = Math.abs(x) + '';
    let ret = coefficient * str.split('').reverse().join('');
    return (ret > Math.pow(2, 31) -1 || ret < - Math.pow(2, 31) ? 0 : ret);
};
