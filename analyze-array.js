export default function analyzeArray(array) {
    const res = {};

    const sum = array.reduce((a, b) => a + b, 0);

    res.average = sum / array.length;

    res.min = Math.min(...array);

    res.max = Math.max(...array);

    res.length = array.length;

    return res;
}
