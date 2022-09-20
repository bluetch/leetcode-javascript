/**
 * Problem: https://leetcode.com/problems/combination-sum/
 * Difficulty: Medium
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


//  深度優先搜尋法(DFS, Depth-first Search)或是廣度優先搜尋法(BFS, Breadth-first Search)

const combinationSum = (candidates, target) => {
  let [buffer, result] = [[],[]];
  bfs(0, target);
  return result;

  function bfs(start, target) {
    //base cases
    if (target === 0) return result.push(buffer.slice());
    if (target < 0 || start === candidates.length) return;

    buffer.push(candidates[start]);
    bfs(start, target - candidates[start]);
    buffer.pop();
    bfs(start + 1, target);
  }
};