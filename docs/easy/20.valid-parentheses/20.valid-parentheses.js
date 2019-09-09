/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */

// 方法一：暴力法

var isValid = function(s) {
    while (s.length) {
        let temp = s;
        s = s.replace('()', '');
        s = s.replace('{}', '');
        s = s.replace('[]', '');
        if (s == temp) {
            return false;
        }
    }
    return true;
};


// 方法二：栈方法

var isValid = function(s) {
    let rightParen = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            rightParen.push(')');
        } else if (s[i] === '[') {
            rightParen.push(']');
        } else if (s[i] === '{') {
            rightParen.push('}');
        } else if (s[i] !== rightParen.pop()) {
            return false;
        }
    }
    return true;
};


// 方法三：栈的另一种写法

var isValid = function (s) {
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    var leftParen = [];
    for (var paren of s){
        if (paren in map) leftParen.push(paren); // 为左括号时，顺序保存
        else { // 为右括号时，与数组末位匹配
            if(paren !== map[leftParen.pop()]) return false;
        }
    }
    return !leftParen.length // 防止全部为左括号
};
