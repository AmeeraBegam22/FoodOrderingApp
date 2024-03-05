import { Sum } from "../sum";

test("Sum function should calculate the sum of two numbers" , () => {
    const result = Sum(3, 7);
    //Assertion
    expect(result).toBe(10);
});