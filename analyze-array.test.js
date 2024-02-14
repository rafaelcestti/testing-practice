import analyzeArray from "./analyze-array";

test("analyze 1, 8, 3, 4, 2, 6", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test("analyze 2, 2, 4, 6", () => {
    expect(analyzeArray([2, 2, 4, 6])).toEqual({
        average: 3.5,
        min: 2,
        max: 6,
        length: 4,
    });
});
