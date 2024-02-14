import capitalize from "./capitalize";

test("capitalize apple", () => {
    expect(capitalize("apple")).toBe("Apple");
});

test("capitalize banana", () => {
    expect(capitalize("banana")).toBe("Banana");
});
