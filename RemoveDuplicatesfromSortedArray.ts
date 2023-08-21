function removeDuplicates(nums: number[]): number {
  let numsSet = new Set(nums);
  let numsArr = [...numsSet.keys()];
  nums.length = 0; // Clear the original array
  nums.push(...numsArr); // Push the elements from the new array into the original array
  return nums.length;
}
