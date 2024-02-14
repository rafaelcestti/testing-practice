export default function capitalize(string) {
    const res = string[0].toUpperCase() + string.slice(1);
    return res;
}
