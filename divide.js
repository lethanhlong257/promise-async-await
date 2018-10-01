module.exports = function divideFunc(a, b, cb) {
    if (typeof a !== 'number') return false;
    if (typeof b !== 'number') return false;
    setTimeout(() => {
        cb(a/b)
    }, 100);
}