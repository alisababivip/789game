function u(...a) {
    return a.filter(Boolean).join(" ")
}
s(a => l(a).toString(36));

function s(a, h) {
    if (typeof a != "function" || h != null && typeof h != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var n = function() {
        var i = arguments,
            e = h ? h.apply(this, i) : i[0],
            o = n.cache;
        if (o.has(e)) return o.get(e);
        var t = a.apply(this, i);
        return n.cache = o.set(e, t) || o, t
    };
    return n.cache = new Map, n
}

function l(a, h) {
    var n, i, e, o, t, f, r, c;
    for (n = a.length & 3, i = a.length - n, e = h, t = 3432918353, f = 461845907, c = 0; c < i;) r = a.charCodeAt(c) & 255 | (a.charCodeAt(++c) & 255) << 8 | (a.charCodeAt(++c) & 255) << 16 | (a.charCodeAt(++c) & 255) << 24, ++c, r = (r & 65535) * t + (((r >>> 16) * t & 65535) << 16) & 4294967295, r = r << 15 | r >>> 17, r = (r & 65535) * f + (((r >>> 16) * f & 65535) << 16) & 4294967295, e ^= r, e = e << 13 | e >>> 19, o = (e & 65535) * 5 + (((e >>> 16) * 5 & 65535) << 16) & 4294967295, e = (o & 65535) + 27492 + (((o >>> 16) + 58964 & 65535) << 16);
    switch (r = 0, n) {
        case 3:
            r ^= (a.charCodeAt(c + 2) & 255) << 16;
        case 2:
            r ^= (a.charCodeAt(c + 1) & 255) << 8;
        case 1:
            r ^= a.charCodeAt(c) & 255, r = (r & 65535) * t + (((r >>> 16) * t & 65535) << 16) & 4294967295, r = r << 15 | r >>> 17, r = (r & 65535) * f + (((r >>> 16) * f & 65535) << 16) & 4294967295, e ^= r
    }
    return e ^= a.length, e ^= e >>> 16, e = (e & 65535) * 2246822507 + (((e >>> 16) * 2246822507 & 65535) << 16) & 4294967295, e ^= e >>> 13, e = (e & 65535) * 3266489909 + (((e >>> 16) * 3266489909 & 65535) << 16) & 4294967295, e ^= e >>> 16, e >>> 0
}
export {
    u as c
};