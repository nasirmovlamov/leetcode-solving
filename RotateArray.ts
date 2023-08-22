/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  for (let index = 0; index < k; index++) {
    const element = nums.pop();
    if (element !== undefined) {
      nums.unshift(element);
    }
  }
}
