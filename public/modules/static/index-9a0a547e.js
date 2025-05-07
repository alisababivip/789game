var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};

function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}

function getAugmentedNamespace(n) {
    if (n.__esModule)
        return n;
    var f = n.default;
    if (typeof f == "function") {
        var a = function a2() {
            if (this instanceof a2) {
                return Reflect.construct(f, arguments, this.constructor);
            }
            return f.apply(this, arguments);
        };
        a.prototype = f.prototype;
    } else
        a = {};
    Object.defineProperty(a, "__esModule", {
        value: true
    });
    Object.keys(n).forEach(function(k) {
        var d = Object.getOwnPropertyDescriptor(n, k);
        Object.defineProperty(a, k, d.get ? d : {
            enumerable: true,
            get: function() {
                return n[k];
            }
        });
    });
    return a;
}
var react_share = globalThis["react"];
const React = /* @__PURE__ */ getDefaultExportFromCjs(react_share);

function cx(...args) {
    return args.filter(Boolean).join(" ");
}
memoize((str) => murmurhash3_32_gc(str).toString(36));

function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = /* @__PURE__ */ new Map();
    return memoized;
}

function murmurhash3_32_gc(key, seed) {
    var remainder, bytes, h1, h1b, c1, c2, k1, i;
    remainder = key.length & 3;
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 3432918353;
    c2 = 461845907;
    i = 0;
    while (i < bytes) {
        k1 = key.charCodeAt(i) & 255 | (key.charCodeAt(++i) & 255) << 8 | (key.charCodeAt(++i) & 255) << 16 | (key.charCodeAt(++i) & 255) << 24;
        ++i;
        k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1b = (h1 & 65535) * 5 + (((h1 >>> 16) * 5 & 65535) << 16) & 4294967295;
        h1 = (h1b & 65535) + 27492 + (((h1b >>> 16) + 58964 & 65535) << 16);
    }
    k1 = 0;
    switch (remainder) {
        case 3:
            k1 ^= (key.charCodeAt(i + 2) & 255) << 16;
        case 2:
            k1 ^= (key.charCodeAt(i + 1) & 255) << 8;
        case 1:
            k1 ^= key.charCodeAt(i) & 255;
            k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
            k1 = k1 << 15 | k1 >>> 17;
            k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
            h1 ^= k1;
    }
    h1 ^= key.length;
    h1 ^= h1 >>> 16;
    h1 = (h1 & 65535) * 2246822507 + (((h1 >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
    h1 ^= h1 >>> 13;
    h1 = (h1 & 65535) * 3266489909 + (((h1 >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
    h1 ^= h1 >>> 16;
    return h1 >>> 0;
}
export {
    React as R,
    getAugmentedNamespace as a,
    commonjsGlobal as b,
    cx as c,
    getDefaultExportFromCjs as g,
    react_share as r
};