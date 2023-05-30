## 💡 Question

> Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
>
> Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
>
> - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
> - Return k.
>
> **Example :**
>
> - Input: nums = [3, 2, 2, 3], val = 3
> - Output: 2, nums = [2, 2, _*, _*]
>
> Explanation: Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)

### 🚀 Answer

```javascript
const removeElement = (nums, val) => {
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== val) {
      count += 1;
    } else {
      nums[index] = 0;
    }
  }

  nums.sort().reverse();

  return count;
};
```
