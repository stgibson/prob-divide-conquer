function countZeroes(nums) {
  // find first 0
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === 0) {
      // if 0 is first num or comes after 1, found first 0
      if (middle === 0 || nums[middle - 1] === 1) {
        return nums.length - middle;
      }
      else {
        end = middle - 1;
      }
    }
    else {
      start = middle + 1;
    }
  }
  // if found no 0, return 0
  return 0;
}

module.exports = countZeroes