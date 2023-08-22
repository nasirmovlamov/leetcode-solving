function plusOne(digits: number[]): number[] {
  let combinedDigits = BigInt(digits.join("")) + BigInt(1);
  let combinedDigitsStr = combinedDigits.toString();
  let combinedDigitsArr = combinedDigitsStr.split("");
  let combinedDigitsArrNum = combinedDigitsArr.map((num) => parseInt(num));
  return combinedDigitsArrNum;
}
