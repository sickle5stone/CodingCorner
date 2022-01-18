/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // unsorted
  var indexMap = {};
  for (var i = 0; i < nums.length; i++) {
    if (indexMap[nums[i]] !== undefined) {
      return [i, indexMap[nums[i]]];
    }
    indexMap[target - nums[i]] = i;
  }
};
