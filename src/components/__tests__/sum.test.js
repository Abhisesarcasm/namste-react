import { sum } from "../sum.js";
test("sum function should calculate sum of 2 numbers", () => {
  const result = sum(5, 2);
  // Assertion
  //   expect(result).toBe(8);
  expect(result).toBe(7);
});
