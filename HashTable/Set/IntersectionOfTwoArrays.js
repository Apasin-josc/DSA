/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
*/

const intersection = function (nums1, nums2) {
  let mySet1 = new Set(nums1);
  let mySet2 = new Set(nums2);
  let result = [];
  for (let value of mySet1) {
    if (mySet1.has(value) && mySet2.has(value)) {
      result.push(value);
    }
  }
  return console.log(result);
};
intersection([1, 2, 2, 1], [2, 2]); //2
