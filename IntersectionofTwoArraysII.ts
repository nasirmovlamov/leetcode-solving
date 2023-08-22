function intersect(nums1: number[], nums2: number[]): number[] {
  let intersectArr: number[] = [];
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      let count = map.get(nums1[i]);
      map.set(nums1[i], count + 1);
    } else {
      map.set(nums1[i], 1);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      let count = map.get(nums2[i]);
      if (count > 0) {
        intersectArr.push(nums2[i]);
        map.set(nums2[i], count - 1);
      }
    }
  }

  return intersectArr;
}
