function s(...t) {
    return t.filter(Boolean).join(" ")
}
i(t => u(t).toString(36));

function i(t, n) {
    if (typeof t != "function" || n != null && typeof n != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var e = function() {
        var h = arguments,
            f = n ? n.apply(this, h) : h[0],
            a = e.cache;
        if (a.has(f)) return a.get(f);
        var r = t.apply(this, h);
        return e.cache = a.set(f, r) || a, r
    };
    return e.cache = new Map, e
}

function u(t, n) {
    var e, h, f, a, r, o, x, c;
    for (e = t.length & 3, h = t.length - e, f = n, r = 3432918353, o = 461845907, c = 0; c < h;) x = t.charCodeAt(c) & 255 | (t.charCodeAt(++c) & 255) << 8 | (t.charCodeAt(++c) & 255) << 16 | (t.charCodeAt(++c) & 255) << 24, ++c, x = (x & 65535) * r + (((x >>> 16) * r & 65535) << 16) & 4294967295, x = x << 15 | x >>> 17, x = (x & 65535) * o + (((x >>> 16) * o & 65535) << 16) & 4294967295, f ^= x, f = f << 13 | f >>> 19, a = (f & 65535) * 5 + (((f >>> 16) * 5 & 65535) << 16) & 4294967295, f = (a & 65535) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
    switch (x = 0, e) {
        case 3:
            x ^= (t.charCodeAt(c + 2) & 255) << 16;
        case 2:
            x ^= (t.charCodeAt(c + 1) & 255) << 8;
        case 1:
            x ^= t.charCodeAt(c) & 255, x = (x & 65535) * r + (((x >>> 16) * r & 65535) << 16) & 4294967295, x = x << 15 | x >>> 17, x = (x & 65535) * o + (((x >>> 16) * o & 65535) << 16) & 4294967295, f ^= x
    }
    return f ^= t.length, f ^= f >>> 16, f = (f & 65535) * 2246822507 + (((f >>> 16) * 2246822507 & 65535) << 16) & 4294967295, f ^= f >>> 13, f = (f & 65535) * 3266489909 + (((f >>> 16) * 3266489909 & 65535) << 16) & 4294967295, f ^= f >>> 16, f >>> 0
}
export {
    s as c
};