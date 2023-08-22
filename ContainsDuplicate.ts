function containsDuplicate(nums: number[]): boolean {
  let hasContainDuplicate = false;
  let map: any = {};
  for (const element of nums) {
    if (map[element]) {
      map[element] += 1;
    } else {
      map[element] = 1;
    }
  }

  for (let item in map) {
    if (Number(map[item]) > 1) {
      hasContainDuplicate = true;
    }
  }
  return hasContainDuplicate;
}
