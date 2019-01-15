nthFibonacci = function(n) {
  /* O: Returns the fibbonacci number n after n times
   * I: number n
   * C: Do not use recursion, solution must run in linear time
   * E: If n is 0 then the fibbonaci number is 0 and if n is 1 the fibonnaci number is 1.
   * If sum is a decimal then round down if < .5 and round up if greater then .5
   */

  /* Approach: Fibbonaci close form formula
   * Mathematical proof:
   *   F(n) = F(n-1) + F(n-2) (valid for n >= 3)
   *
   * Similar to linear recurrence equation:
   *   x_n = A*x_n-1 + B* x_n-2
   *
   * In closed form(simplified forms):
   *   F_n = (alpha^n - beta^n) / (alpha - beta)
   * NOTE: alpha and beta are roots of x^2 = Ax + B, where A = B = 1
   *
   * Which then becomes,
   *   x^2 = x + 1 with roots: x = 0.5(1 + sqrt(5))
   *
   * Subsitute equation back into closed form equation and simplify:
   *   F_n = [1/sqrt(5)] * [(1 + sqrt(5))/2] ^ n
   *   F_n = A * B^n
   */

  let FibNumSum = 0;

  if (n === 0) {
    return FibNumSum;
  } else if (n === 1) {
    return 1;
  }
  let coefficientA = 1 / Math.sqrt(5);
  let coefficientB = (1 + Math.sqrt(5)) / 2;

  FibNumSum = coefficientA * coefficientB ** n;
  return Math.round(FibNumSum);

  //   if (n < 2) return n;
  //
  //   let a = 0, b = 1, temp;
  //   for (let i = 2; i <= n; i++) {
  //     temp = a + b;
  //     a = b;
  //     b = temp;
  //   }
  //
  //   return b;
};
