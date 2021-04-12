function sortedFrequency(nums, target) {
  // search for start and end of target, and compare indices
  let start = 0;
  let end = nums.length - 1;
  let targetStart = -1;
  let targetEnd = -1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      // if found first instance of target, store value
      if (middle === 0 || nums[middle - 1] !== target) {
        targetStart = middle;
        break;
      }
      else {
        end = middle - 1;
      }
    }
    else if (nums[middle] > target) {
      end = middle - 1;
    }
    else {
      start = middle + 1;
    }
  }

  start = 0;
  end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      // if found last instance of target, store value
      if (middle === nums.length - 1 || nums[middle + 1] !== target) {
        targetEnd = middle;
        break;
      }
      else {
        start = middle + 1;
      }
    }
    else if (nums[middle] > target) {
      end = middle - 1;
    }
    else {
      start = middle + 1;
    }
  }

  if (targetStart !== -1 && targetEnd !== -1) {
    return targetEnd - targetStart + 1;
  }
  return -1;
}

module.exports = sortedFrequency