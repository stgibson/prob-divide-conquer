function findFloor(nums, target) {
  // base case for floor of target not in nums
  if (target < nums[0]) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    console.log(middle);
    if (nums[middle] === target) {
      return nums[middle];
    }
    // if middle number is at the end and less than target, it is floor
    if (middle === nums.length - 1 && nums[middle] < target) {
      return nums[middle];
    }
    // if middle is last num less than target, it is floor of target
    if (
      middle < nums.length - 1 && nums[middle] < target &&
      nums[middle + 1] > target
    ) {
      return nums[middle];
    }
    // otherwise if still less than target, remove 1st half
    if (nums[middle] < target) {
      start = middle + 1;
    }
    else {
      end = middle - 1;
    }
  }
}

module.exports = findFloor