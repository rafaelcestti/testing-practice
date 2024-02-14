import reverseString from "./reverse-string";

test("reverse apple", () => {
    expect(reverseString("apple")).toBe("elppa");
});

test("reverse banana", () => {
    expect(reverseString("banana")).toBe("ananab");
});
