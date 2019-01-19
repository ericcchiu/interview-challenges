function largestProductOfThree(arr) {
  arr.sort((a, b) => b - a);

  let positiveProduct = arr[0] * arr[1] * arr[2];
  let negativeProduct = arr[0] * arr[arr.length - 1] * arr[arr.length - 2];

  return (positiveProduct > negativeProduct) ? positiveProduct : negativeProduct;
}
