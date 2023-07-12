function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove elements outside the current window
    if (deque.length > 0 && deque[0] === i - k) {
      deque.shift();
    }

    // Remove smaller elements from the end of the deque
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Add the current element to the deque
    deque.push(i);

    // Add the maximum element for the current window
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
