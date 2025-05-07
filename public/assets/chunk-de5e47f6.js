var A = Object.defineProperty,
    z = Object.defineProperties;
var G = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty,
    N = Object.prototype.propertyIsEnumerable;
var h = (e, s, a) => s in e ? A(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[s] = a,
    x = (e, s) => {
        for (var a in s || (s = {})) v.call(s, a) && h(e, a, s[a]);
        if (c)
            for (var a of c(s)) N.call(s, a) && h(e, a, s[a]);
        return e
    },
    j = (e, s) => z(e, G(s));
var b = (e, s) => {
    var a = {};
    for (var l in e) v.call(e, l) && s.indexOf(l) < 0 && (a[l] = e[l]);
    if (e != null && c)
        for (var l of c(e)) s.indexOf(l) < 0 && N.call(e, l) && (a[l] = e[l]);
    return a
};
import {
    a as p,
    cJ as u,
    cT as I,
    en as R,
    es as y,
    cl as g
} from "./chunk-64278058.js";
import {
    R as D,
    r
} from "./chunk-73e80d68.js";
import {
    j as n
} from "./chunk-a4af42e8.js";
import {
    c as M
} from "./chunk-5bcb444f.js";

function F(e, s = 160, a = 12) {
    return p.isMobile() ? 3.2 : e === 0 ? 7 : (s = p.relativePx(s), a = p.relativePx(a), Math.floor((e + a) / (s + a)))
}
const J = D.memo(function(m) {
    var t = m,
        {
            className: e,
            loop: s,
            viewAllClassName: a
        } = t,
        l = b(t, ["className", "loop", "viewAllClassName"]);
    const [i, o] = r.useState(s), d = r.useMemo(() => {
        if (s) return {
            onPointerEnter() {
                o(void 0)
            },
            onPointerLeave() {
                o(s)
            }
        }
    }, [s]);
    return n.jsxs("div", j(x({
        className: M(T, e)
    }, d), {
        children: [n.jsxs("div", {
            className: "grid-tit",
            children: [l.icon && n.jsx(u, {
                name: l.icon
            }), n.jsx("span", {
                className: "txt",
                children: l.title
            })]
        }), n.jsx(r.Suspense, {
            fallback: n.jsx(I, {}),
            children: n.jsx(L, j(x({}, l), {
                loop: i,
                className: a
            }))
        })]
    }))
});

function L({
    getData: e,
    renderItem: s,
    navChildren: a,
    loop: l,
    calcSize: m = i => Math.floor(i / 200),
    className: t
}) {
    const i = e(),
        [o, d] = r.useState(m(0)),
        S = R(k => {
            d(m(k.width))
        }),
        w = r.useMemo(() => ({
            "--grid-num": o
        }), [o]),
        {
            scrollNode: C,
            prevEnable: E,
            nextEnable: P,
            slide: f
        } = y({
            data: i,
            className: M("grid-list", t),
            ref: S,
            style: w,
            renderItem: s,
            loop: l
        });
    return n.jsxs(n.Fragment, {
        children: [n.jsxs("div", {
            className: "grid-nav",
            children: [a, n.jsx(g, {
                disabled: !E,
                onClick: () => f(-1),
                className: "slide-btn prev",
                children: n.jsx(u, {
                    name: "Arrow"
                })
            }), n.jsx(g, {
                disabled: !P,
                onClick: () => f(1),
                className: "slide-btn next",
                children: n.jsx(u, {
                    name: "Arrow"
                })
            })]
        }), C]
    })
}
const T = "g1an962a";
export {
    J as G, F as c
};