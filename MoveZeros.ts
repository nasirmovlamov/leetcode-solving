/**
 Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums: number[]): void {
  let copiedArr1: number[] = [];
  let copiedArr2: number[] = [];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      copiedArr1.push(nums[index]);
    } else {
      copiedArr2.push(nums[index]);
    }
  }
  nums.length = 0;
  nums.push(...copiedArr2, ...copiedArr1);
}
