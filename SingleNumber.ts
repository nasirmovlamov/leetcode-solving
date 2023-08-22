function singleNumber(nums: number[]): number {
  let singleNumber = 0;
  let map: any = {};
  for (const element of nums) {
    if (map[element]) {
      map[element] += 1;
    } else {
      map[element] = 1;
    }
  }

  for (let item in map) {
    if (Number(map[item]) == 1) {
      singleNumber = Number(item);
    }
  }
  return singleNumber;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
