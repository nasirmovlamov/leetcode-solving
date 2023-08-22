/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let convertedMatrix: number[][] = [];
  for (let index = 0; index < matrix.length; index++) {
    for (let index2 = 0; index2 < matrix.length; index2++) {
      console.log(matrix[index2][index]);
      if (!convertedMatrix[index]) {
        convertedMatrix.push([]);
        convertedMatrix[index].unshift(matrix[index2][index]);
      } else {
        convertedMatrix[index].unshift(matrix[index2][index]);
      }
    }
  }
  matrix.length = 0;
  matrix.push(...convertedMatrix);
}
rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
