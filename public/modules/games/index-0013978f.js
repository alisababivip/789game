import {
    g as E
} from "./vendor-8c02be2a.js";
var y = .1,
    M = typeof Float32Array == "function";

function x(r, n) {
    return 1 - 3 * n + 3 * r
}

function F(r, n) {
    return 3 * n - 6 * r
}

function d(r) {
    return 3 * r
}

function b(r, n, t) {
    return ((x(n, t) * r + F(n, t)) * r + d(n)) * r
}

function g(r, n, t) {
    return 3 * x(n, t) * r * r + 2 * F(n, t) * r + d(n)
}

function j(r) {
    return r
}
const q = E(function(r, n, t, p) {
    if (!(0 <= r && r <= 1 && 0 <= t && t <= 1)) throw new Error("bezier x values must be in [0, 1] range");
    if (r === n && t === p) return j;
    for (var i = M ? new Float32Array(11) : new Array(11), c = 0; c < 11; ++c) i[c] = b(c * y, r, t);

    function z(a) {
        for (var s = 0, f = 1; f !== 10 && i[f] <= a; ++f) s += y;
        --f;
        var h = s + (a - i[f]) / (i[f + 1] - i[f]) * y,
            A = g(h, r, t);
        return A >= .001 ? function(m, u, e, v) {
            for (var w = 0; w < 4; ++w) {
                var o = g(u, e, v);
                if (o === 0) return u;
                u -= (b(u, e, v) - m) / o
            }
            return u
        }(a, h, r, t) : A === 0 ? h : function(m, u, e, v, w) {
            var o, l, B = 0;
            do(o = b(l = u + (e - u) / 2, v, w) - m) > 0 ? e = l : u = l; while (Math.abs(o) > 1e-7 && ++B < 10);
            return l
        }(a, s, s + y, r, t)
    }
    return function(a) {
        return a === 0 ? 0 : a === 1 ? 1 : b(z(a), n, p)
    }
});
export {
    q as B
};