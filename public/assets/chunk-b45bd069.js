import {
    m as y,
    l as v,
    i as h,
    H as s,
    n as c,
    X as A,
    c as H,
    D as X,
    I as b
} from "./chunk-64278058.js";

function d(n) {
    return function(r, t, i) {
        for (var o = -1, e = Object(r), u = i(r), f = u.length; f--;) {
            var a = u[n ? f : ++o];
            if (t(e[a], a, e) === !1) break
        }
        return r
    }
}
var w = d();
const g = w;

function x(n, r) {
    return n && g(n, r, y)
}

function m(n, r) {
    return function(t, i) {
        if (t == null) return t;
        if (!v(t)) return n(t, i);
        for (var o = t.length, e = r ? o : -1, u = Object(t);
            (r ? e-- : ++e < o) && i(u[e], e, u) !== !1;);
        return t
    }
}
var B = m(x);
const p = B;

function O(n, r) {
    var t = -1,
        i = v(n) ? Array(n.length) : [];
    return p(n, function(o, e, u) {
        i[++t] = r(o, e, u)
    }), i
}

function C(n, r) {
    var t = n.length;
    for (n.sort(r); t--;) n[t] = n[t].value;
    return n
}

function j(n, r) {
    if (n !== r) {
        var t = n !== void 0,
            i = n === null,
            o = n === n,
            e = h(n),
            u = r !== void 0,
            f = r === null,
            a = r === r,
            l = h(r);
        if (!f && !l && !e && n > r || e && u && a && !f && !l || i && u && a || !t && a || !o) return 1;
        if (!i && !e && !l && n < r || l && t && o && !i && !e || f && t && o || !u && o || !a) return -1
    }
    return 0
}

function D(n, r, t) {
    for (var i = -1, o = n.criteria, e = r.criteria, u = o.length, f = t.length; ++i < u;) {
        var a = j(o[i], e[i]);
        if (a) {
            if (i >= f) return a;
            var l = t[i];
            return a * (l == "desc" ? -1 : 1)
        }
    }
    return n.index - r.index
}

function k(n, r, t) {
    r.length ? r = s(r, function(e) {
        return c(e) ? function(u) {
            return A(u, e.length === 1 ? e[0] : e)
        } : e
    }) : r = [H];
    var i = -1;
    r = s(r, X(b));
    var o = O(n, function(e, u, f) {
        var a = s(r, function(l) {
            return l(e)
        });
        return {
            criteria: a,
            index: ++i,
            value: e
        }
    });
    return C(o, function(e, u) {
        return D(e, u, t)
    })
}

function E(n, r, t, i) {
    return n == null ? [] : (c(r) || (r = r == null ? [] : [r]), t = i ? void 0 : t, c(t) || (t = t == null ? [] : [t]), k(n, r, t))
}
export {
    g as a, p as b, d as c, m as d, x as e, O as f, j as g, k as h, E as o
};