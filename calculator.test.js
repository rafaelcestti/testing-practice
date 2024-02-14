import Calculator from "./calculator";

const testCalculator = new Calculator();

test("add 2 plus 2", () => {
    expect(testCalculator.sum(2, 2)).toBe(4);
});

test("multiply 4 times 5", () => {
    expect(testCalculator.multiply(4, 5)).toBe(20);
});

test("add 0.2 plus 0.1", () => {
    expect(testCalculator.sum(0.2, 0.1)).toBeCloseTo(0.3);
});
