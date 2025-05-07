function f(...a) {
    return a.filter(Boolean).join(" ")
}

function l(a) {
    return a / 16 + "rem"
}

function p(a, n = 1) {
    return `rgba(${parseInt(a.slice(1,3),16)}, ${parseInt(a.slice(3,5),16)}, ${parseInt(a.slice(5),16)}, ${n})`
}(function(a, n) {
    if (typeof a != "function" || n != null && typeof n != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var i = function() {
        var e = arguments,
            o = n ? n.apply(this, e) : e[0],
            r = i.cache;
        if (r.has(o)) return r.get(o);
        var h = a.apply(this, e);
        return i.cache = r.set(o, h) || r, h
    };
    i.cache = new Map
})(a => function(n, i) {
    var e, o, r, h, s, u, t, c;
    for (e = 3 & n.length, o = n.length - e, r = i, s = 3432918353, u = 461845907, c = 0; c < o;) t = 255 & n.charCodeAt(c) | (255 & n.charCodeAt(++c)) << 8 | (255 & n.charCodeAt(++c)) << 16 | (255 & n.charCodeAt(++c)) << 24, ++c, r = 27492 + (65535 & (h = 5 * (65535 & (r = (r ^= t = (65535 & (t = (t = (65535 & t) * s + (((t >>> 16) * s & 65535) << 16) & 4294967295) << 15 | t >>> 17)) * u + (((t >>> 16) * u & 65535) << 16) & 4294967295) << 13 | r >>> 19)) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (h >>> 16) & 65535) << 16);
    switch (t = 0, e) {
        case 3:
            t ^= (255 & n.charCodeAt(c + 2)) << 16;
        case 2:
            t ^= (255 & n.charCodeAt(c + 1)) << 8;
        case 1:
            r ^= t = (65535 & (t = (t = (65535 & (t ^= 255 & n.charCodeAt(c))) * s + (((t >>> 16) * s & 65535) << 16) & 4294967295) << 15 | t >>> 17)) * u + (((t >>> 16) * u & 65535) << 16) & 4294967295
    }
    return r ^= n.length, r = 2246822507 * (65535 & (r ^= r >>> 16)) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r = 3266489909 * (65535 & (r ^= r >>> 13)) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, (r ^= r >>> 16) >>> 0
}(a).toString(36));
export {
    f as c, p as o, l as r
};