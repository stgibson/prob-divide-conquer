function findRotatedIndex(nums, target) {
  // use binary search to find rotated start & end
  let start = 0;
  let end = nums.length - 1;
  let rotatedStart = 0;
  let rotatedEnd = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    // base case for no rotation
    if (middle === 0) {
      break;
    }
    // if middle of section is less than item before it, found rotated start
    else if (nums[middle] < nums[middle - 1]) {
      rotatedStart = middle;
      rotatedEnd = middle - 1;
      break;
    }
    // if middle is less than 1st num, on the right side of rotation
    else if (nums[middle] < nums[0]) {
      end = middle - 1;
    }
    else {
      start = middle + 1;
    }
  }

  // find part of array with target & use binary search to find it
  start = 0;
  end = nums.length - 1;

  // first find the sorted part of array with target
  if (nums[start] > target) {
    start = rotatedStart;
  }
  else {
    end = rotatedEnd
  }

  // now normal binary search
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] > target) {
      end = middle - 1;
    }
    else {
      start = middle + 1;
    }
  }

  // if didn't find target, return -1
  return -1;
}

module.exports = findRotatedIndex