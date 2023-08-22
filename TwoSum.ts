function twoSum(nums: number[], target: number): number[] {
  let targetSet = new Set<number>();
  for (let index = 0; index < nums.length; index++) {
    for (let index2 = 0; index2 < nums.length; index2++) {
      if (index !== index2 && nums[index] + nums[index2] === target) {
        targetSet.add(index);
        targetSet.add(index2);
      }
    }
  }
  return [...targetSet.values()];
}
