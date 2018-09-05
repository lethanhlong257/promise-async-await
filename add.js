export default function add(a, b) {
    if (typeof a !== 'number') return false;
    if (typeof b !== 'number') return false;
    setTimeout(() => {
        return a+b;
    }, 100);
}