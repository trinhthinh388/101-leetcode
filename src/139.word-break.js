/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (let k = 0; k < wordDict.length; k++) {
      const w = wordDict[k];
      if (i + w.length <= s.length && s.slice(i, i + w.length) === w) {
        dp[i] = dp[i + w.length];
      }
      if (dp[i]) break;
    }
  }

  return dp[0];
};
// @lc code=end
