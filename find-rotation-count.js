function findRotationCount(nums) {
  // use binary search to find beginning of sorted array
  let start = 0;
  let end = nums.length - 1;

  // base case for no rotations
  if (nums[start] < nums[end]) {
    return 0;
  }

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    // base case if no rotations
    if (middle === 0) {
      return 0;
    }
    // if num is less than previous num, have found starting point
    if (nums[middle] < nums[middle - 1]) {
      return middle;
    }
    if (nums[middle] > nums[0]) {
      start = middle + 1;
    }
    else {
      end = middle - 1;
    }
  }
}

module.exports = findRotationCount