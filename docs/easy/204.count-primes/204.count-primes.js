/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

/**
 * @param {number} n
 * @return {number}
 */

// 埃拉托斯特尼筛法

var countPrimes = function(n) {
    let count = 0;
    let signs = new Uint8Array(n);

    for (let i = 2; i < n; i++) {
        if (!signs[i - 1]) {
            count++;

            for (let j = i * i; j <= n; j += i) {
                signs[j - 1] = true;
            }
        }
    }
    return count;
};
