/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
  let i = 0;
  let maxCandies = 0;
  let ans = [];
  while (i < candies.length) {
    maxCandies = Math.max(candies[i], maxCandies);
    ans = candies.map((candy) => candy + extraCandies >= maxCandies);
    i++;
  }
  return ans;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
