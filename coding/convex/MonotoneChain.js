/**
 * 587 Erect the Fence:
 * You are given an array trees where trees[i] = [xi, yi] represents the location of a tree in the garden.
 * You are asked to fence the entire garden using the minimum length of rope as it is expensive.
 * The garden is well fenced only if all the trees are enclosed.
 * Return the coordinates of trees that are exactly located on the fence perimeter.
 * Example:
 * Input: points = [[1,2],[2,2],[4,2]]
 * Output: [[4,2],[2,2],[1,2]]
 *
 * @param {number[][]} trees
 * @return {number[][]}
 */
function cross(p, q, r) {
    return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
}

let outerTrees = function(trees) {
    if(trees.length == 1) return trees;

    trees.sort(function(p, q) {
        return q[0] - p[0] == 0 ? q[1] - p[1] : q[0] - p[0];
    });

    let lower = [];
    for (let i = 0; i < trees.length; i++) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], trees[i]) > 0) {
            lower.pop();
        }
        lower.push(trees[i]);
    }

    let upper = [];
    for (let i = trees.length - 1; i >= 0; i--) {
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], trees[i]) > 0) {
            upper.pop();
        }
        upper.push(trees[i]);
    }

    upper.pop();
    lower.pop();
    let answer =[]
      lower.concat(upper).forEach((ele) => {
          if(!answer.includes(ele)){
              answer.push(ele);
          }
      })
    return answer;
};

/**
 * Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Erect the Fence.
 * Memory Usage: 46.5 MB, less than 66.67% of JavaScript online submissions for Erect the Fence.
 * Time Complexity: O(nlog(n))
 * Space Complexity: O(n)
 * **/
