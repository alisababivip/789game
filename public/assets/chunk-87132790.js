var g = Object.defineProperty,
    N = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty,
    u = Object.prototype.propertyIsEnumerable;
var h = (e, a, s) => a in e ? g(e, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[a] = s,
    o = (e, a) => {
        for (var s in a || (a = {})) x.call(a, s) && h(e, s, a[s]);
        if (l)
            for (var s of l(a)) u.call(a, s) && h(e, s, a[s]);
        return e
    },
    d = (e, a) => N(e, y(a));
var j = (e, a) => {
    var s = {};
    for (var r in e) x.call(e, r) && a.indexOf(r) < 0 && (s[r] = e[r]);
    if (e != null && l)
        for (var r of l(e)) a.indexOf(r) < 0 && u.call(e, r) && (s[r] = e[r]);
    return s
};
import {
    j as n
} from "./chunk-a4af42e8.js";
import {
    r as f
} from "./chunk-73e80d68.js";
import {
    c as L
} from "./chunk-5bcb444f.js";
import {
    e5 as k,
    eg as b,
    cS as q,
    cJ as C,
    ed as P,
    d1 as B,
    aC as G,
    cB as M
} from "./chunk-64278058.js";
const $ = f.memo(function({
        prex: e,
        routes: a,
        renderLabel: s
    }) {
        return k() ? n.jsx(I, {
            prex: e,
            routes: a,
            renderLabel: s
        }) : n.jsx(F, {
            prex: e,
            routes: a,
            renderLabel: s
        })
    }),
    E = ["account", "security", "preferences", "kyc"],
    F = function({
        prex: e,
        routes: a,
        renderLabel: s
    }) {
        const {
            routeParams: r
        } = b(), c = r["*"], m = v(a, c), p = E.findIndex(t => t === c) !== -1;
        return n.jsx("div", {
            className: w,
            children: n.jsxs("div", {
                className: `content-area ${p&&"bg-transparent"}`,
                children: [n.jsx("div", {
                    className: "menu",
                    children: a.map(t => n.jsx(q, {
                        href: e + t.path,
                        className: c === t.path ? "select" : "",
                        children: s ? s({
                            label: t.label,
                            value: t.path,
                            icon: t.icon
                        }) : n.jsxs(n.Fragment, {
                            children: [t.icon && n.jsx(C, {
                                name: t.icon
                            }), " ", t.label]
                        })
                    }, t.path))
                }), n.jsx("div", {
                    className: "right-info",
                    children: m
                })]
            })
        })
    },
    I = function({
        prex: e,
        routes: a,
        renderLabel: s
    }) {
        const {
            routeParams: r
        } = b(), c = r["*"], m = P(), p = a.map(i => d(o({}, i), {
            value: e + i.path
        })), t = v(a, c);
        return n.jsxs("div", {
            className: `${z} mob`,
            children: [n.jsx(B, {
                value: e + c,
                onChange: i => m(i, {
                    replace: !0
                }),
                options: p,
                renderLabel: s
            }), n.jsx("div", {
                className: "page-info",
                children: t
            })]
        })
    };

function v(e, a) {
    const s = f.useMemo(() => e.map(c => ({
            path: c.path,
            element: n.jsx(T, {
                children: c.element
            }, c.path)
        })), [e]),
        r = s.find(c => c.path === a);
    return r ? r.element : s[0].element
}
const J = {
        y: 60,
        opacity: 0
    },
    S = {
        y: 0,
        opacity: 1
    },
    T = ({
        children: e
    }) => {
        const a = {
            initial: J,
            animate: S,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 45,
                mass: 1
            }
        };
        return n.jsx(G.div, d(o({}, a), {
            children: n.jsx(M, {
                children: e
            })
        }))
    },
    w = "pyqxnkg",
    z = "mqmuhe4",
    A = s => {
        var r = s,
            {
                className: e
            } = r,
            a = j(r, ["className"]);
        return n.jsx("div", o({
            className: L(D, e)
        }, a))
    },
    D = "gnkt6sx";
export {
    $ as G, A as a
};